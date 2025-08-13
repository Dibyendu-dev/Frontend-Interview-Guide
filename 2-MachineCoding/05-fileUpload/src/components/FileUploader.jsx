import { useState } from "react";
import Preview from "./Preview";

export const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (fileName) => {
    const filterfile = files.filter((file) => file.name !== fileName);
    setFiles(filterfile);
  };

  // console.log(files);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const dropFiles = e.dataTransfer.files;
    setFiles([...files, ...dropFiles]);
  };

  return (
    <div className=" file-uploader">
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={` dropzone ${dragging ? "dragging" : ""} `}
      >
        <p>Drag and drop files here or</p>
        <input
          type="file"
          multiple
          name=""
          id="file-input"
          className="hidden-input"
          onChange={handleChange}
        />
        <label htmlFor="file-input" className="browse-btn">
          Browse Files
        </label>
      </div>

      <div className="preview-container">
        {files.map((file) => {
          return (
            <Preview key={file.name} fileDetail={file} onDelete={removeFile} />
          );
        })}
      </div>
    </div>
  );
};
