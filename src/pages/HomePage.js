import React, { useEffect, useState } from "react";
import { getFiles, saveFile } from "../config/apiClient";
import { clearCookie } from "../helper/Cookie";

function HomePage() {
  const [files, setFiles] = useState();
  const [uploadFile, setUploadFile] = useState();
  const [fileName, setFileName] = useState();

  async function handleGet() {
    await getFiles((data) => {
      setFiles(data.data);
    });
  }
  async function handleSave() {
    const data = new FormData();
    data.append("files", uploadFile, fileName);

    await saveFile(data, (res) => {
      handleGet();
    });
  }

  async function handleUpload(e) {
    setUploadFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const handleSignOut = () => {
    clearCookie("userLoggedIn");
    window.location.replace("/login");
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="container pt-5">
      <input className="btn btn-dark" type="file" onChange={handleUpload} />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleSave();
        }}
      >
        Upload
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleSignOut();
        }}
      >
        Logout
      </button>
      <table className="w-100 mt-3">
        <th>FileName</th>
        <th>Action</th>
        {files &&
          files.length > 0 &&
          files.map((list) => (
            <>
              <tbody>
                <td>{list.name}</td>
                <td>
                  <a href={list.url}>
                    <button className="btn btn-success">Download</button>
                  </a>
                </td>
              </tbody>
            </>
          ))}
      </table>
    </div>
  );
}

export default HomePage;
