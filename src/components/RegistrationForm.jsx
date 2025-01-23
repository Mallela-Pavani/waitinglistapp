import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useWaitlist } from "../context/WaitlistContext";

const validInviteCodes = ["austin234", "alvin145", "karthik321"];

function RegistrationForm() {
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [message, setMessage] = useState("");
  const { dispatch } = useWaitlist();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validInviteCodes.includes(inviteCode)) {
      dispatch({ type: "ADD_TO_INVITE_LIST", payload: { name, inviteCode } });
      setMessage(`Welcome ${name}, you've been added to the invite list.`);
    } else {
      dispatch({ type: "ADD_TO_GENERAL_LIST", payload: { name } });
      setMessage(
        "Invalid invite code. You have been added to the general waitlist."
      );
    }
    setName("");
    setInviteCode("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mx-auto mt-4"
      style={{ maxWidth: "400px" }}
    >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formInviteCode">
        <Form.Label>Invite Code (Optional)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Invite Code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Join Waitlist
      </Button>
      {message && <Alert className="mt-3">{message}</Alert>}
    </Form>
  );
}

export default RegistrationForm;
