
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const db = require("./config/db");
const swaggerSpec = require("./swagger/swagger");
const waitlistRoutes = require("./routes/waitlistRoutes");

const app = express();

/* =========================
   Database Connection
========================= */
db.connect()
  .then(() => {
    console.log("✅ PostgreSQL Connected");
  })
  .catch((err) => {
    console.error("❌ Database Error Full:", err);
  });

/* =========================
   CORS Configuration
========================= */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",

  "https://twinn.live",
  "https://www.twinn.live",

  // Vercel Frontend
  "https://ai-twin-63zh.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow Postman and server-to-server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* =========================
   Middleware
========================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   Routes
========================= */
app.use("/api", waitlistRoutes);

/* =========================
   Swagger Docs
========================= */
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

/* =========================
   Health Check
========================= */
app.get("/", (req, res) => {
  res.send("AI Twin Backend Running 🚀");
});

/* =========================
   Start Server
========================= */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(🚀 Server Running on Port ${PORT});
});
