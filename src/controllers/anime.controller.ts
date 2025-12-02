import { Request, Response, NextFunction } from "express";
import * as jikan from "../services/jikan.service";
import { success } from "../utils/response";

export const home = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.topAiring();
    success(res, data);
  } catch (err) {
    next(err);
  }
};

export const searchAnime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.search(req.params.q);
    success(res, data);
  } catch (err) {
    next(err);
  }
};

export const detailAnime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.detail(req.params.id);
    success(res, data);
  } catch (err) {
    next(err);
  }
};

export const episodesAnime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.episodes(req.params.id);
    success(res, data);
  } catch (err) {
    next(err);
  }
};

export const picturesAnime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.pictures(req.params.id);
    success(res, data);
  } catch (err) {
    next(err);
  }
};

export const recommendationsAnime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.recommendations(req.params.id);
    success(res, data);
  } catch (err) {
    next(err);
  }
};

export const charactersAnime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.characters(req.params.id);
    success(res, data);
  } catch (err) {
    next(err);
  }
};

export const staffAnime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await jikan.staff(req.params.id);
    success(res, data);
  } catch (err) {
    next(err);
  }
};
