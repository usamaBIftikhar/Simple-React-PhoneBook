import React, { useState } from "react";
import Intro from "./intro";
import "./App.css";

const phoneBook = [
  { name: "Mashood Ali", number: "+923318822203" },
  { name: "Abdul Rehman", number: "+923234044700" },
];

const App = () => {
  const [contacts, setContacts] = useState(phoneBook);
  const [showForm, setShowForm] = useState(false);

  const sortContacts = (copyContacts) => {
    for (let i = 0; i < copyContacts.length; i++) {
      for (let j = i + 1; j < copyContacts.length; j++) {
        if (copyContacts[i].name > copyContacts[j].name) {
          let temp = copyContacts[i];
          copyContacts[i] = copyContacts[j];
          copyContacts[j] = temp;
        }
      }
    }
    setContacts([...copyContacts]);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let obj = {};
    if (e.target[0].value !== "" && e.target[1].value !== "") {
      obj = { name: e.target[0].value, number: e.target[1].value };
      sortContacts([...contacts, obj]);
    }
  };
  const handleDelete = (key) => {
    let copyContacts = [...contacts];
    copyContacts.splice(key, 1);
    sortContacts([...copyContacts]);
  };

  return (
    <div id="main">
      <Intro />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="App">
              <h2 className="header">PhoneBook</h2>
              <span
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  setShowForm(!showForm);
                }}
              >
                {showForm ? "Hide Contact Form" : "Create New Contact"}
              </span>

              {showForm && (
                <div className="container">
                  <form className="form" onSubmit={handlesubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="number"
                        placeholder="Number"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add
                    </button>
                  </form>
                </div>
              )}
              {contacts.map((contact, index) => (
                <div key={index} className="contacts">
                  <div class="contact-details">
                    <h5>{contact.name}</h5>
                    <p>{contact.number}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                    class="icon-holder"
                  >
                    <i class="delete fa fa-trash"></i>
                  </button>
                  <hr />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
