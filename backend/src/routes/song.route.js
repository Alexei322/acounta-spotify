import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Song route GET")
})

export default router;