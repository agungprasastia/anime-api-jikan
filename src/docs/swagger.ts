import swaggerJsdoc from "swagger-jsdoc";
import { OpenAPIV3 } from "openapi-types";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Anime REST API",
      version: "1.0.0",
      description: "API Anime dengan dokumentasi Swagger otomatis (Jikan Integration)",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Local Server",
      },
    ],
  },

  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
