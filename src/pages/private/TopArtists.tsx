import { useState, useEffect } from 'react';
import useApi from '../../hooks/useApi';
import { Artist } from '../../types/spotify';
import ArtistPanel from '../../components/ArtistPanel';

export default function TopArtists() {
    const api = useApi();
    const [artists, setArtists] = useState<Artist[]>([]);

    async function fetchProfileData() {
        try {
            const { data: { items } } = await api.spotify.artists();
            setArtists(items);
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
            <h2 className='text-3xl font-bold my-7'>Your Top {artists.length} artists</h2>
            {artists.map((artist: Artist, index: number) => (<ArtistPanel artist={artist} order={index + 1} key={index} />))}
        </div>
    )    
}