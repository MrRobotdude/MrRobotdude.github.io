import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const createMessage = async (
  receiver,
  senderName,
  senderPhone,
  senderEmail,
  message
) => {
  const response = await axios.post(`${API_BASE_URL}/create`, {
    receiver,
    senderName,
    senderPhone,
    senderEmail,
    message,
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