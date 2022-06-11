import { useState, useEffect } from 'react';
import TrackPanel from '../../components/TrackPanel';
import useApi from '../../hooks/useApi';
import { Track } from '../../types/spotify';

export default function TopTracks() {
    const api = useApi();
    const [tracks, setTracks] = useState<Track[]>([]);

    async function fetchProfileData() {
        try {
            const { data: { items } } = await api.spotify.tracks();
            setTracks(items);
        }
        catch (e: any) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <div className='flex flex-col container max-w-4xl mx-auto text-white justify-center mt-10'>
            <h2 className='text-3xl font-bold my-7'>Your Top {tracks.length} tracks</h2>
            {tracks.map((track: Track, index: number) => (<TrackPanel track={track} order={index + 1} key={index} />))}
        </div>
    )
}