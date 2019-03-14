import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: "1",
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: "2",
        name: "Peter Pan",
        email: "peterpan@gmail.com",
        phone: "444-444-4444"
      },
      {
        id: "3",
        name: "Freddy Kruger",
        email: "freddykruger@gmail.com",
        phone: "333-333-3333"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="">
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
