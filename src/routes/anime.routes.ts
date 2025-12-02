import { Router } from "express";
import {
  home,
  searchAnime,
  detailAnime,
  episodesAnime,
  picturesAnime,
  recommendationsAnime,
  charactersAnime,
  staffAnime
} from "../controllers/anime.controller";

const router = Router();

/**
 * @openapi
 * /api/anime/home:
 *   get:
 *     tags: [Anime]
 *     summary: Get top airing anime
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/home", home);

/**
 * @openapi
 * /api/anime/search/{q}:
 *   get:
 *     tags: [Anime]
 *     summary: Search anime by keyword
 *     parameters:
 *       - in: path
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 */
router.get("/search/:q", searchAnime);

/**
 * @openapi
 * /api/anime/{id}:
 *   get:
 *     tags: [Anime]
 *     summary: Get anime detail by ID
 */
router.get("/:id", detailAnime);

/**
 * @openapi
 * /api/anime/{id}/episodes:
 *   get:
 *     tags: [Anime]
 *     summary: Get anime episodes list
 */
router.get("/:id/episodes", episodesAnime);

/**
 * @openapi
 * /api/anime/{id}/pictures:
 *   get:
 *     tags: [Anime]
 *     summary: Get anime pictures
 */
router.get("/:id/pictures", picturesAnime);

/**
 * @openapi
 * /api/anime/{id}/recommendations:
 *   get:
 *     tags: [Anime]
 *     summary: Get anime recommendations
 */
router.get("/:id/recommendations", recommendationsAnime);

/**
 * @openapi
 * /api/anime/{id}/characters:
 *   get:
 *     tags: [Anime]
 *     summary: Get anime characters
 */
router.get("/:id/characters", charactersAnime);

/**
 * @openapi
 * /api/anime/{id}/staff:
 *   get:
 *     tags: [Anime]
 *     summary: Get anime staff
 */
router.get("/:id/staff", staffAnime);

export default router;
