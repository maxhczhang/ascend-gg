import { RiotSummonerMatchData } from "./RiotSummerMatchData";

export interface RiotMatchData {
    queueId: number;
    endOfGameResult: string;
    participants: RiotSummonerMatchData[];
}