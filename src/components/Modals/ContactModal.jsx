import React, { useCallback, useState } from "react";
import {
  Modal,
  ModalBody,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Container,
  Row,
  Col,
} from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { createMessage } from "api";

export default function ContactModal(props) {
  const [alert, setAlert] = useState(false);
  const { modal, toggleModal, selectedEmail, setSelectedEmail, onSuccess } =
    props;
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSelectEmail = useCallback(
    (e) => {
      setSelectedEmail(e.target.value);
    },
    [setSelectedEmail]
  );

  const handleCaptchaChange = useCallback((token) => {
    setCaptchaToken(token);
  }, []);

  const validateForm = useCallback(() => {
    const { name, phoneNumber, email, message } = formData;
    const validationErrors = [];

    if (!name.trim()) {
      validationErrors.push("Please enter your name.");
    }

    if (!/^\d{7,15}$/.test(phoneNumber)) {
      validationErrors.push("Please enter a valid phone number.");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.push("Please enter a valid email address.");
    }

    if (!message.trim()) {
      validationErrors.push("Please enter your message.");
    }

    if (!captchaToken) {
      validationErrors.push("Please complete the CAPTCHA.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setAlert(true);
      return false;
    }

    return true;
  }, [formData, captchaToken]);

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
    setCaptchaToken("");
    setSelectedEmail("");
    setErrors([]);
    setAlert(false);
  }, [setSelectedEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors([]);

    try {
      await createMessage(
        selectedEmail,
        formData.name,
        formData.phoneNumber,
        formData.email,
        formData.message
      );
      onSuccess(
        "Your message has been sent successfully! 🚀 We're thrilled to assist you and will get back to you as soon as possible. Thank you for reaching out to us!"
      );
      handleToggleModal();
      resetForm();
    } catch (err) {
      setErrors(["Failed to send message. Please try again later."]);
      setAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleModal = () => {
    setAlert(false);
    toggleModal();
  };

  return (
    <Modal isOpen={modal} toggle={handleToggleModal}>
      <div className="modal-header justify-content-center">
        <button className="close" type="button" onClick={handleToggleModal}>
          <i className="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <h4 className="title title-up">Contact Us</h4>
      </div>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="select"
              name="selectedEmail"
              id="emailSelect"
              value={selectedEmail}
              onChange={handleSelectEmail}
            >
              <option value="CP-001">Customer Service</option>
              <option value="CP-002">Marketing</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="nameInput">Name</Label>
            <Input
              type="text"
              name="name"
              id="nameInput"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phoneInput">Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              id="phoneInput"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="emailInput">Email</Label>
            <Input
              type="email"
              name="email"
              id="emailInput"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="messageTextarea">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="messageTextarea"
              value={formData.message}
              onChange={handleInputChange}
            />
          </FormGroup>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={handleCaptchaChange}
          />
          {alert && (
            <Alert color="danger" isOpen={alert}>
              <Container>
                <Row>
                  <Col xs="11" className="m-0 p-0">
                    <ul className="m-0 p-0 ml-3">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col xs="1" className="m-0 p-0">
                    <button
                      type="button"
                      className="close"
                      onClick={() => setAlert(false)}
                    >
                      <span aria-hidden="true">
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </span>
                    </button>
                  </Col>
                </Row>
              </Container>
            </Alert>
          )}
          <Button color="info" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
          <Button color="danger" type="button" onClick={handleToggleModal}>
            Cancel
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
}
