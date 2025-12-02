import { Router } from "express";
import animeRoutes from "./anime.routes";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ ok: true, message: "Anime API berjalan" });
});

router.use("/anime", animeRoutes);

export default router;
