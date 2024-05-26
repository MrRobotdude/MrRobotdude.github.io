import { useCallback, useState } from "react";
import { Modal, ModalBody, FormGroup, Label, Input, Button } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { createMessage } from "api";

export default function ContactModal(props) {
  const { modal, toggleModal, selectedEmail, setSelectedEmail } = props;
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    if (!name.trim()) {
      alert("Please enter your name.");
      return false;
    }

    if (!/^\d{7,15}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!message.trim()) {
      alert("Please enter your message.");
      return false;
    }

    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
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
  }, [setSelectedEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    

    try {
      await createMessage(
        selectedEmail,
        formData.name,
        formData.phoneNumber,
        formData.email,
        formData.message
      );
      alert("Message sent successfully!");
      toggleModal();
      resetForm();
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
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
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleCaptchaChange}
          />
          {error && <p className="text-danger">{error}</p>}
          <Button color="info" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
          <Button color="danger" type="button" onClick={toggleModal}>
            Cancel
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
}
