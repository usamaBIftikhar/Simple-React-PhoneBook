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
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? "Hide Contact Form" : "Create New Contact"}
              </span>

              {showForm && (
                <div className="container">
                  <form className="form">
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
                <div className="contacts">
                  <div class="contact-details">
                    <h5>{contact.name}</h5>
                    <p>{contact.number}</p>
                  </div>
                  <button class="icon-holder">
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
