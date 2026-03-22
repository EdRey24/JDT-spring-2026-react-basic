import type { Game } from "../../interfaces/Game";
import GameCard from "../GameCard/GameCard";

export default function GameSales({ data }: { data: Game[] }){
    return (
        <table className="game-sales-table">
            <thead>
                <tr>
                    <th>Store</th>
                    <th>Savings</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th>Deal Rating</th>
                    <th>Release</th>
                    <th>Reviews</th>
                    <th>Recent</th>
                </tr>
            </thead>
            <tbody>
                {data.map((game) => (
                    <GameCard key={`${game.gameID}`} game={game}/>
                ))}
            </tbody>
        </table>
    );
}