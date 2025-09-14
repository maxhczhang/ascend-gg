import { SummonerMatchData } from "../interface/Riot/SummonerMatchData";

interface SummonerListProps {
    summoners: SummonerMatchData[];
    ddVersion: string;
    handleSearch: (gameName: string, tagLine: string) => void;
}

const SummonerList = ({
    summoners,
    ddVersion,
    handleSearch,
}: SummonerListProps) => {
    return (
        <div className="flex flex-col w-24 gap-1">
            {summoners.map((summoner, index) => (
                <div className="flex items-center gap-1" key={index}>
                    <img 
                        src={`https://ddragon.leagueoflegends.com/cdn/${ddVersion}/img/champion/${summoner.champion}.png`}
                        className="size-6 rounded-xs flex-shrink-0"
                        alt={`${summoner.champion} icon`}
                    />
                    <span 
                        className="text-xs truncate cursor-pointer min-w-0 flex-1"
                        onClick={() => handleSearch(summoner.gameName, summoner.tagLine)}
                        title={summoner.gameName}
                    >
                        {summoner.gameName}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default SummonerList;