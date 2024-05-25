import axios from "axios";

export const financialReportClient = async () => {
  const response = await axios.get('http://localhost:1234/data');
  return response.data;
}
