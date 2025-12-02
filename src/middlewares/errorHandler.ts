import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("❌ ERROR:", err);

  res.status(500).json({
    ok: false,
    message: err.message || "Terjadi kesalahan pada server",
  });
}
