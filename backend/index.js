const express = require("express");
const cors = require("cors");

const { processGraph } = require("./utils/graphBuilder");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use environment port (required for deployment)
const PORT = process.env.PORT || 5000;

// Health check route
app.get("/", (req, res) => {
  res.send("BFHL API is running");
});

// Main API endpoint
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    if (!Array.isArray(data)) {
      return res.status(400).json({
        error: "Request body must contain 'data' as an array"
      });
    }

    const result = processGraph(data);

    // Final response format
    res.json({
      user_id: "kunalmeshram",
      email_id: "km6471@srmist.edu.in",
      college_roll_number: "RA2311003040085",
      ...result
    });

  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});