import type { Game } from "../../interfaces/Game.ts";
import ClockIcon from "../ClockIcon/ClockIcon.tsx";
import SteamRatingIcon from "../SteamRatingIcon/SteamRatingIcon.tsx";
import StoreIcon from "../StoreIcon/StoreIcon.tsx";
import "./GameCard.css"

function formatDate(releaseDate: number): string {
    const monthNames = [
        "January", "Febuary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November",
        "December"
    ];
    
    const date = new Date(releaseDate * 1000);
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    const formatted = `${month} ${day}, ${year}`;
    return formatted
}

function formatSavings(savings: string): string {
  const num = parseFloat(savings);
  return isNaN(num) ? savings : num.toFixed(2);
};

export default function GameCard({ game }: { game: Game}) {

    return (
        <tr className="game-card">
            <td className="store">
                <StoreIcon game={game}/>
            </td>
            <td className="savings">{formatSavings(game.savings)}%</td>
            <td className="price">
                ${game.salePrice}
                <sup><del>${game.normalPrice}</del></sup>
            </td>
            <td>
                <span className="thumbnail" style={{backgroundImage: `url(${game.thumb})`}} role="img" aria-label={`${game.title} thumbnail`}></span>
                <a href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} target="_blank"><span className="title-cell">{game.title}</span></a>
            </td>
            <td className="deal-rating">{game.dealRating}</td>
            <td className="release-date">{formatDate(game.releaseDate)}</td>
            <td className="steam-rating">
                <SteamRatingIcon game={game}/>
            </td>
            <td className="last-change">
                <ClockIcon lastChange={game.lastChange}/>
            </td>
        </tr>
    );
}