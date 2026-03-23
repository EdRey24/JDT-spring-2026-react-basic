import { useEffect, useState} from "react";
import type { Game } from "./interfaces/Game";
import GameSales from "./components/GameSales/GameSales";
import "./App.css"

export default function App() {
  const [data, setData] = useState<Game[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async (pageNumber: number) => {
  if (loading || !hasMore) return;
  setLoading(true);
  try {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=1,25&pageSize=60&pageNumber=${pageNumber}`
    );
    const newGames: Game[] = await response.json();

    if (newGames.length === 0) {
      setHasMore(false);
    } else {
      setData((prev) => {
        const map = new Map();
        prev.forEach(game => map.set(`${game.gameID}`, game));
        newGames.forEach(game => map.set(`${game.gameID}`, game));
        return Array.from(map.values());
      });
      setPage((prev) => prev + 1);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchData(0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !loading && hasMore) {
        fetchData(page);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

  return (
    <div className="parent">
      <GameSales data={data} />
      {loading && <div className="loading">Loading more games...</div>}
    </div>
  );
}