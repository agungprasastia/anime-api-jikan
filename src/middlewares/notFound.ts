import { Request, Response, NextFunction } from "express";

export default function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    ok: false,
    message: "Endpoint tidak ditemukan",
    path: req.originalUrl,
  });
}
