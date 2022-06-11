import axios, { AxiosResponse } from 'axios';
import { useRecoilState } from 'recoil';
import { tokenState } from '../state/recoil';
import { ArtistsResponse, SpotifyProfile, TimeRange, TracksResponse } from '../types/spotify';

export default function useApi() {
    const [token,] = useRecoilState(tokenState);

    class SpotifyService {
        public getAuthLink(): string {
            return `https://accounts.spotify.com/authorize?` + [
                `client_id=${import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID}`,
                `redirect_uri=${import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI}`,
                `scope=${import.meta.env.VITE_APP_SPOTIFY_SCOPE}`,
                `response_type=token`
            ].join("&");
        }

        public me(): Promise<AxiosResponse<SpotifyProfile>> {
            return axios.get(`https://api.spotify.com/v1/me`, { headers: { 'Authorization': `Bearer ${token}` } });
        }

        public artists(limit = 10, time_range: TimeRange = "medium_term"): Promise<AxiosResponse<ArtistsResponse>> {
            return axios.get(`https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=${time_range}`, { headers: { 'Authorization': `Bearer ${token}` } });
        }

        public tracks(limit = 10, time_range: TimeRange = "medium_term"): Promise<AxiosResponse<TracksResponse>> {
            return axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${time_range}`, { headers: { 'Authorization': `Bearer ${token}` } });
        }        
    }

    return {
        spotify: new SpotifyService()
    }
}