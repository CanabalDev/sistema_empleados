import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

export default async function calculatePayroll(data) {
    const response = await api.post("/payroll/calculate", data);

    return response.data;
}
