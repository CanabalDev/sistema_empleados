import { Router } from "express";

import PayrollController from "../controllers/PayrollController.js";

const router = Router();

router.post("/calculate", PayrollController.calculate);

router.get("/test", (req, res) => {
    res.status(200).json({
        message: "Test successful",
    });
});

export default router;
