import axios from "axios";

export const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || "").replace(/\/+$/, "");
export const contactFormAvailable = Boolean(API_BASE_URL && process.env.REACT_APP_SITE_KEY);

export const createMessage = async (
  receiver,
  senderName,
  senderPhone,
  senderEmail,
  message,
  captchaToken
) => {
  if (!contactFormAvailable) throw new Error("Contact form is unavailable.");
  const response = await axios.post(`${API_BASE_URL}/create`, {
    receiver,
    senderName,
    senderPhone,
    senderEmail,
    message,
    captchaToken,
  });
  return response.data;
};

export const readMessages = async (filter) => {
  const response = await axios.get(`${API_BASE_URL}/read`, {
    params: { filter },
  });
  return response.data;
};

export const readMessageByID = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/readByID`, {
    params: { id },
  });
  return response.data;
};

export const updateMessage = async (messageID, newMessage) => {
  const response = await axios.post(`${API_BASE_URL}/update`, {
    messageID,
    newMessage,
  });
  return response.data;
};

export const deleteMessage = async (messageID) => {
  const response = await axios.post(`${API_BASE_URL}/delete`, {
    messageID,
  });
  return response.data;
};
