import { ClubModel } from "../models/club-mode";
import fs from "fs/promises"

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(data)

    return clubs;
};