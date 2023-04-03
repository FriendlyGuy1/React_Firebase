import React, { useState } from "react";

import firestore from "../../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Message, SetMessage] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(Name.length < 2){
      alert("name is too short")
      return
    }
    if(Email === ""){
      alert('email cant be empty')
      return
    }
    if(Message.length < 10){
      alert("message is too short")
      return
    }

    try {
      const docRef = await addDoc(collection(firestore, "contacts"), {
          client_name: Name,
          client_email: Email,
          client_message: Message,
          created: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
  } catch (error) {
      console.log(error)
  }

  SetName('');
  SetEmail('');
  SetMessage('');

  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={Name}
          onChange={(e) => SetName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Text">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Enter your message"
          value={Message}
          onChange={(e) => SetMessage(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
