import React from "react";

const Intro = () => {
  return (
    <div id="intro">
      <h1 className="title"> PhoneBook by Usama Bin Iftikhar </h1>
      <h1 className="subtitle"> PhoneBook to store contacts</h1>
      <div className="description">
        <p>
          This task includes implementation of a simple phonebook with
          functionality.{" "}
        </p>
        <ul>
          <li>Contact should be added from the contact form</li>
          <li>The contacts should be displayed in alphabetical order</li>
          <li>The contact should be deleted by pressing the delete icon</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
