import express from "express";
import { safeEnv } from "./env.js";
import { appointmentRoutes } from "./features/appointments/module.js";


// Define the port number
const PORT = safeEnv.PORT;

// Create an Express application
const app = express();
app.use(express.json());

// Add the client routes to the server
app.use("/api/v1", appointmentRoutes.getRouter());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
