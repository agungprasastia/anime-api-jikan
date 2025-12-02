import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import apiRoutes from "./routes";
import swaggerSpec from "./docs/swagger";
import errorHandler from "./middlewares/errorHandler";
import notFound from "./middlewares/notFound";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Swagger Documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use("/api", apiRoutes);

// Not Found & Error Handlers
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 API Anime berjalan di http://localhost:${PORT}`);
  console.log(`📄 Dokumentasi Swagger: http://localhost:${PORT}/docs`);
});
