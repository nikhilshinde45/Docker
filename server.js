const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const MONGO_URL = "mongodb://admin:qwerty@localhost:27017";


const client = new MongoClient(MONGO_URL);

let db;
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🔹 Connect ONCE when server starts
async function connectDB() {
    try {
        await client.connect();
        db = client.db("dockertest-db");
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    }
}

connectDB();

// GET all users
app.get("/getUsers", async (req, res) => {
    try {
        const data = await db.collection("users").find({}).toArray();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// POST new user
app.post("/addUser", async (req, res) => {
    try {
        const userObj = req.body;
        const result = await db.collection("users").insertOne(userObj);
        res.json({ message: "User added", result });
    } catch (err) {
        res.status(500).json({ error: "Failed to add user" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
