import { useState, useEffect } from 'react';
import { Artist, Track } from '../types/spotify';
import useApi from '../hooks/useApi';
import ArtistPanel from '../components/ArtistPanel';
import TrackPanel from '../components/TrackPanel';

export default function Profile() {
    const api = useApi();
    const [artists, setArtists] = useState<Artist[]>([]);
    const [tracks, setTracks] = useState<Track[]>([]);

    async function fetchProfileData() {
        try {
            {
                const { data: { items } } = await api.spotify.artists();
                setArtists(items);
            }
            {
                const { data: { items } } = await api.spotify.tracks();
                setTracks(items);
            }
        }
        catch (e: any) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <div className='flex flex-col container max-w-4xl mx-auto text-white justify-center'>
            <h2 className='text-3xl font-bold my-7'>Your Top {artists.length} artists</h2>
            
            {artists.map((artist: Artist, index: number) => (<ArtistPanel artist={artist} order={index + 1} key={index}/>))}

            <h2 className='text-3xl font-bold my-7'>Your Top {tracks.length} tracks</h2>
            {tracks.map((track: Track, index: number) => (<TrackPanel track={track} order={index + 1} key={index} />))}
        </div>
    )
}