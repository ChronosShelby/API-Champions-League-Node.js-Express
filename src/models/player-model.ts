export interface PlayerModel {
    id: number;
    name: string;
    Club: string;
    nationality: string;
    position: string;
    statistics: {
        overall: number;
        pace: number;
        shooting: number;
        passing: number;
        dribbling: number;
        defending: number;
        physical: number;
    },
}