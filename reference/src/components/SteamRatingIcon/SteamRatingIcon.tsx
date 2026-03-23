import type { Game } from "../../interfaces/Game";
import positive from "../../icons/positive.svg";
import mixed from "../../icons/mixed.svg";
import negative from "../../icons/negative.svg";
import question from "../../icons/question.svg";
import "./SteamRatingIcon.css";

export default function SteamRatingIcon({ game }: { game: Game }) {
  const ratingText = game.steamRatingText ?? "";
  const ratingPercent = game.steamRatingPercent ?? "?";
  const ratingCount = game.steamRatingCount ?? "?";

  let iconSrc: string;
  let color: string;
  const ratingLower = ratingText.toLowerCase();

  if (ratingLower.includes("positive")) {
    iconSrc = positive;
    color = "blue";
  } else if (ratingLower.includes("mixed")) {
    iconSrc = mixed;
    color = "yellow";
  } else if (ratingLower.includes("negative")) {
    iconSrc = negative;
    color = "red";
  } else {
    iconSrc = question;
    color = "white";
  }

  const displayText = ratingText || "Unknown";
  const tooltip = `${displayText} - ${ratingPercent}% of the ${ratingCount} user reviews for this game are positive.`;

  return (
    <span title={tooltip} className={`rating-icon-${color}`}>
      <img className="steam-rating-icon" src={iconSrc} alt={displayText} />
    </span>
  );
}