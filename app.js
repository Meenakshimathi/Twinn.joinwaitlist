const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require("./config/db");

db.connect()
  .then(() => {
    console.log("✅ PostgreSQL Connected");
  })
  .catch((err) => {
    console.error("❌ Database Error:", err.message);
  });

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const waitlistRoutes = require('./routes/waitlistRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', waitlistRoutes);

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

app.get('/', (req,res)=>{
    res.send('AI Twin Backend Running');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
});