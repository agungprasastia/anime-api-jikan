import { Response } from "express";

export const success = (
  res: Response,
  data: any,
  message: string = "success"
): Response => {
  return res.json({
    ok: true,
    message,
    data,
  });
};
