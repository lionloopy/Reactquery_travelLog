import axios from "axios";

const getLog = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/Log`);
  return response.data;
};

const addLog = async (newLog) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/Log`, newLog);
};

const deleteLog = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/Log/${id}`);
};

const updateLog = async (payload) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/Log/${payload.id}`, {
    title: payload.title,
    content: payload.content,
  });
};

export { getLog, addLog, deleteLog, updateLog };
