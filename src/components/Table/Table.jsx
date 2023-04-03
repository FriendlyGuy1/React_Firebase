import React from "react";
import Table from "react-bootstrap/Table";

const ContactTable = (props) => {
  const questions = props.questions;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Message</th>
        </tr>
      </thead>

      <tbody>
        {questions &&
          questions.map((question, ind) => {
            return (
              <tr key={question.id}>
                <td>{ind+1}</td>
                <td>{question.client_name}</td>
                <td>{question.client_message}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default ContactTable;
