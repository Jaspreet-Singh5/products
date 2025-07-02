import express from 'express';

const router = express.Router();

// /api/products
router.get("/", (req, res) => {
    res.send("Hello World");
});

export default router;
