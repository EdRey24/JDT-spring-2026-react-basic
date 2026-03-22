import clock from "../../icons/clock.svg";
import "./ClockIcon.css"

export default function ClockIcon({ lastChange }: { lastChange: number}){
    const now = Date.now() / 1000;
    const diffSeconds = now - lastChange;
    const diffDays = diffSeconds / 60 / 60 / 24;

    let color: string;
    if (diffDays < 1){
        color = "green";
    } else if (diffDays < 7){
        color = "yellow";
    } else if (diffDays < 30){
        color = "red";
    } else {
        color = "black";
    }

    const getTimeAgo = (seconds: number): string => {
        if (seconds < 60) {
            return "less than a minute ago";
        }
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        }
        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        }
        const days = Math.floor(hours / 24);
        if (days < 30) {
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        }
        const months = Math.floor(days / 30);
        if (months < 12) {
            return `${months} month${months !== 1 ? 's' : ''} ago`;
        }
        const years = Math.floor(months / 12);
        return `${years} year${years !== 1 ? 's' : ''} ago`;
    };

    const timeAgoString = getTimeAgo(diffSeconds);

    return (
        <span
        className={`clock-icon clock-icon-${color}`}
        title={`${timeAgoString}`}
        >
        <img src={clock}/>
        </span>
    );
}