export interface Followers {
    href?: any;
    total: number;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Artist {
    external_urls: {
        spotify: string;
    };
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface TrackArtist {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Album {
    album_type: string;
    artists: TrackArtist[];
    available_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface Track {
    album: Album;
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
        isrc: string;
    };
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface ArtistsResponse {
    items: Artist[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    previous?: any;
    next: string;
}

export interface TracksResponse {
    items: Track[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    previous?: any;
    next: string;
}

export type TimeRange =
    | "long_term"
    | "medium_term"
    | "short_term"