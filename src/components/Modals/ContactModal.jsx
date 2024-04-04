import { useState } from "react";
import { Modal, ModalBody, FormGroup, Label, Input, Button } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactModal(props) {
  const { modal, toggleModal, selectedEmail, setSelectedEmail } = props;
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSelectEmail = (e) => {
    setSelectedEmail(e.target.value);
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log("Form submitted:", {
      selectedEmail,
      name,
      phoneNumber,
      email,
      message,
    });
    toggleModal(false);
  };

  const validateForm = () => {
    // Basic validation for name
    if (!name.trim()) {
      alert("Please enter your name.");
      return false;
    }

    // Basic validation for phone number (7 to 15 digits)
    if (!/^\d{7,15}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    // Basic validation for email
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Basic validation for message
    if (!message.trim()) {
      alert("Please enter your message.");
      return false;
    }

    // CAPTCHA validation
    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return false;
    }

    return true;
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal}>
      <div className="modal-header justify-content-center">
        <button className="close" type="button" onClick={toggleModal}>
          <i className="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <h4 className="title title-up">Contact Us</h4>
      </div>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="emailSelect">Choose Email</Label>
            <Input
              type="select"
              name="select"
              id="emailSelect"
              value={selectedEmail}
              onChange={handleSelectEmail}
            >
              <option value="customer_service">Customer Service</option>
              <option value="marketing">Marketing</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="nameInput">Name</Label>
            <Input
              type="text"
              id="nameInput"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phoneInput">Phone Number</Label>
            <Input
              type="tel"
              id="phoneInput"
              value={phoneNumber}
              onChange={(e) => handleInputChange(e, setPhoneNumber)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="emailInput">Email</Label>
            <Input
              type="email"
              id="emailInput"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="messageTextarea">Message</Label>
            <Input
              type="textarea"
              id="messageTextarea"
              value={message}
              onChange={(e) => handleInputChange(e, setMessage)}
            />
          </FormGroup>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            //6LcVw5kpAAAAAOMBLhQxWJlJi_K-9uVz_K1Lf86R
            //setelah dideploy tolong ganti ke key ini
            onChange={handleCaptchaChange}
          />
          <Button color="info" type="submit">
            Submit
          </Button>
          <Button color="danger" type="button" onClick={toggleModal}>
            Cancel
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
}
