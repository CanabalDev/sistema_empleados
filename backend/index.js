import express, { json } from "express";
import cors from "cors";
import payrollRoutes from "./src/routes/payrollRoutes.js";

const app = express();

app.use(cors());

app.use(json());

app.use("/api/payroll", payrollRoutes);

app.listen(3000, () => {
    console.log("Servidor iniciado");
});
