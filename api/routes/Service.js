const fs = require("fs");
const baseUrl = "http://localhost:8080/files/";
const getListFiles = (req, res) => {
  fs.readdir("./data/", function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });
    let data = {
      data: fileInfos,
    };
    res.status(200).send(data);
  });
};
const download = (req, res) => {
  const fileName = req.params.name;
  res.download("./data/" + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
const upload = (req, res) => {
  const file = req.files.files;
  const filename = file.name;
  const newpath = "./data/";
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
};

const login = (req, res) => {
  const data = req.body;

  let defaultEmail = "admin@externlabs.com";
  let defaultPassword = "1234";

  let { email, password } = data;
  try {
    if (!email && !password) {
      return res
        .status(500)
        .send({ message: "Email and Password Required", code: 200 });
    }
    if (email !== defaultEmail) {
      return res.status(500).send({ message: "Invalid Email", code: 200 });
    }
    if (password !== defaultPassword) {
      return res.status(500).send({ message: "Invalid Password", code: 200 });
    }
    return res
      .status(200)
      .send({ message: "User Logged In correctly", code: 200 });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getListFiles,
  download,
  upload,
  login,
};
