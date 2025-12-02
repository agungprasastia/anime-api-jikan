/**
 * @openapi
 * components:
 *   schemas:

 *     AnimeItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 5114
 *         title:
 *           type: string
 *           example: "Fullmetal Alchemist: Brotherhood"
 *         image:
 *           type: string
 *           example: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
 *         score:
 *           type: number
 *           example: 9.1
 *         type:
 *           type: string
 *           example: "TV"

 *     AnimeDetail:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 5114
 *         title:
 *           type: string
 *           example: "Fullmetal Alchemist: Brotherhood"
 *         synopsis:
 *           type: string
 *           example: "Dua saudara alkemis berusaha mengembalikan tubuh mereka..."
 *         image:
 *           type: string
 *         genres:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Action"
 *         score:
 *           type: number
 *         episodes:
 *           type: integer
 *           example: 64

 *     EpisodeItem:
 *       type: object
 *       properties:
 *         episode:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: "To Challenge the Sun"
 *         aired:
 *           type: string
 *           example: "2009-04-05"

 *     PictureItem:
 *       type: object
 *       properties:
 *         image:
 *           type: string
 *           example: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"

 *     CharacterItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Edward Elric"
 *         role:
 *           type: string
 *           example: "Main"
 *         image:
 *           type: string
 *           example: "https://cdn.myanimelist.net/images/characters/10/187927.jpg"

 *     StaffItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         positions:
 *           type: array
 *           items:
 *             type: string

 *     RecommendationItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         image:
 *           type: string
 */
