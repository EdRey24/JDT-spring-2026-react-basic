export interface Game {
    title: string;
    storeID: string;
    dealID: string;
    gameID: string;
    salePrice: string;
    normalPrice: string;
    savings: string;
    steamRatingText: string;
    steamRatingPercent: string;
    steamRatingCount: string;
    releaseDate: number; // seconds since the epoch
    lastChange: number; // seconds since the epoch
    dealRating: string;
    thumb: string;
}