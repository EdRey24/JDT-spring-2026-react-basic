import type { Game } from "../../interfaces/Game";
import steamIcon from "../../icons/steam.svg";
import epicIcon from "../../icons/epic.svg";
import question from "../../icons/question.svg";
import "./StoreIcon.css"

export default function StoreIcon({ game }: { game: Game }){
    let iconUrl: string;
    let storeName: string;

    switch (game.storeID){
        case "1":
            iconUrl = steamIcon;
            storeName = "Steam"
            break;
        case "25":
            iconUrl = epicIcon;
            storeName = "Epic Games"
            break;
        default:
            iconUrl = question;
            storeName = "Unknown"
    }

    return (
        <img className="store-icons" src={iconUrl} alt={`${storeName} store icon`}/>
    );
}