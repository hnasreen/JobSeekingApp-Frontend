import React from "react";

const ResumeModal = ({ Url, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={Url} alt="resume" />
      </div>
    </div>
  );
};

export default ResumeModal;