import fetch from "cross-fetch";

const JIKAN_BASE = "https://api.jikan.moe/v4";

export async function topAiring() {
  const res = await fetch(`${JIKAN_BASE}/top/anime?filter=airing`);
  const json = await res.json();

  return json.data?.map((a: any) => ({
    id: a.mal_id,
    title: a.title,
    image: a.images?.jpg?.large_image_url,
    score: a.score,
    type: a.type,
  }));
}

export async function search(q: string) {
  const res = await fetch(
    `${JIKAN_BASE}/anime?q=${encodeURIComponent(q)}&limit=24`
  );
  const json = await res.json();

  return json.data?.map((a: any) => ({
    id: a.mal_id,
    title: a.title,
    synopsis: a.synopsis,
    image: a.images?.jpg?.large_image_url,
    type: a.type,
    score: a.score,
  }));
}

export async function detail(id: string) {
  const res = await fetch(`${JIKAN_BASE}/anime/${id}/full`);
  const json = await res.json();
  const a = json.data;

  return {
    id: a.mal_id,
    title: a.title,
    synopsis: a.synopsis,
    image: a.images?.jpg?.large_image_url,
    genres: a.genres,
    score: a.score,
    episodes: a.episodes,
  };
}

export async function episodes(id: string, page: number = 1) {
  const res = await fetch(`${JIKAN_BASE}/anime/${id}/episodes?page=${page}`);
  const json = await res.json();

  return json.data?.map((ep: any) => ({
    episode: ep.mal_id,
    title: ep.title,
    aired: ep.aired,
  }));
}

export async function pictures(id: string) {
  const res = await fetch(`${JIKAN_BASE}/anime/${id}/pictures`);
  const json = await res.json();

  return json.data?.map((p: any) => ({
    large: p.jpg?.large_image_url,
    small: p.jpg?.image_url,
  }));
}

export async function recommendations(id: string) {
  const res = await fetch(`${JIKAN_BASE}/anime/${id}/recommendations`);
  const json = await res.json();

  return json.data;
}

export async function characters(id: string) {
  const res = await fetch(`${JIKAN_BASE}/anime/${id}/characters`);
  const json = await res.json();

  return json.data;
}

export async function staff(id: string) {
  const res = await fetch(`${JIKAN_BASE}/anime/${id}/staff`);
  const json = await res.json();

  return json.data;
}
