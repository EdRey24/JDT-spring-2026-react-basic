export interface Game {
    title: string;
    storeID: string;
    dealID: string;
    salePrice: string;
    normalPrice: string;
    savings: string;
    steamRatingText: string;
    steamRatingPercent: string;
    steamRatingCount: string;
    steamAppID: string;
    releaseDate: number; // seconds since the epoch
    lastChange: number; // seconds since the epoch
    dealRating: string;
    thumb: string;
}