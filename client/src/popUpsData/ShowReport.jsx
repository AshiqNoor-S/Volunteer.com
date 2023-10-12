import React from "react";
import { PopUpStyle } from "../styles/PopUpStyle";

const ShowReport = ({ closeModal }) => {
  return (
    <PopUpStyle>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Report An Issue</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nisi dignissimos mollitia ex ut tenetur commodi facilis tempore,
          quidem ipsa magnam autem ad numquam temporibus harum enim recusandae.
          Id, impedit. Ab, praesentium? Veritatis eaque temporibus aperiam
          obcaecati corporis soluta iste quo. Itaque est, quasi minima
          voluptatem voluptatum magnam omnis repellat.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </PopUpStyle>
  );
};

export default ShowReport;
