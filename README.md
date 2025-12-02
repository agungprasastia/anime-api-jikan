# 📘 Anime REST API

A modern Anime REST API that delivers clean and structured data retrieved from the Jikan API (Unofficial MyAnimeList API).  
Useful for applications such as web apps, dashboards, and mobile clients.

---

## 📦 Features

| Endpoint | Description | Example |
|----------|-------------|---------|
| **GET /api/anime/home** | Get top airing anime | `/api/anime/home` |
| **GET /api/anime/search/:query** | Search anime by keyword | `/api/anime/search/naruto` |
| **GET /api/anime/:id** | Get detailed anime information | `/api/anime/1` |
| **GET /api/anime/:id/episodes** | Get list of episodes | `/api/anime/1/episodes` |
| **GET /api/anime/:id/pictures** | Get anime pictures | `/api/anime/1/pictures` |
| **GET /api/anime/:id/recommendations** | Get related anime recommendations | `/api/anime/1/recommendations` |
| **GET /api/anime/:id/characters** | Get characters from an anime | `/api/anime/1/characters` |
| **GET /api/anime/:id/staff** | Get production staff information | `/api/anime/1/staff` |

---

## 🛠 Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Jikan API](https://img.shields.io/badge/Jikan_API-2E294E?style=for-the-badge&logo=myanimelist&logoColor=white)

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/agungprasastia/anime-api-jikan.git
cd anime-api-jikan
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env`
```env
PORT=8080
```

### 4. Run development server
```bash
npm run dev
```

### 5. Build and run production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```txt
src/
├── controllers/
│   └── anime.controller.ts 
├── docs/
│   ├── swagger.ts
│   └── schema.ts
├── middlewares/
│   ├── errorHandler.ts
│   └── notFound.ts
├── routes/
│   ├── index.ts
│   └── anime.routes.ts
├── services/
│   └── jikan.service.ts
├── utils/
│   └── response.ts
└── index.ts
```

---

## 📜 License

This project is licensed under the **MIT License**.  
See the LICENSE file for more details.

---