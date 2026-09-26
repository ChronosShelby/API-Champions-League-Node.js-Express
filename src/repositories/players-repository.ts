import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import fs from "fs/promises";

const filePath = "./src/data/players.json";

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    const data = await fs.readFile(filePath, "utf-8");
    const players: PlayerModel[] = JSON.parse(data);

    return players;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const players = await findAllPlayers();

    return players.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    const players = await findAllPlayers();

    players.push(player);

    await fs.writeFile(
        filePath,
        JSON.stringify(players, null, 2),
        "utf-8"
    );
};

export const deleteOnePlayer = async (id: number) => {
    const players = await findAllPlayers();

    const index = players.findIndex((player) => player.id === id);

    if (index !== -1) {
        players.splice(index, 1);

        await fs.writeFile(
            filePath,
            JSON.stringify(players, null, 2),
            "utf-8"
        );

        return true;
    }

    return false;
};

export const findAndModifyPlayer = async (
    id: number,
    statistics: StatisticsModel
): Promise<PlayerModel | undefined> => {

    const players = await findAllPlayers();

    const playerIndex = players.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        players[playerIndex].statistics = statistics;

        await fs.writeFile(
            filePath,
            JSON.stringify(players, null, 2),
            "utf-8"
        );

        return players[playerIndex];
    }

    return undefined;
};