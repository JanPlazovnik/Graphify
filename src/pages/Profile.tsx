import { useState, useEffect } from 'react';
import { SpotifyProfile } from '../types/spotify';
import useApi from '../hooks/useApi';
import { FiExternalLink } from 'react-icons/fi';

export default function Profile() {
    const api = useApi();
    const [profile, setProfile] = useState<SpotifyProfile | null>(null);

    async function fetchProfileData() {
        try {
            const { data } = await api.spotify.me();
            setProfile(data);
        }
        catch (e: any) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchProfileData();
    }, []);

    return (
        <div className='flex flex-col container max-w-4xl mx-auto text-white items-center justify-center mt-20 gap-3'>
            <img src={profile?.images?.[0].url} className='rounded-full max-w-[150px]'/>
            <h1 className='text-3xl text-white font-bold'>{profile?.display_name}</h1>
            {/* Followers Badge */}
            <span className='px-2 py-1 font-semibold bg-dark-100 rounded-md'>{profile?.followers.total} followers</span>
            <a href={profile?.external_urls.spotify} target="_blank" rel='noreferrer' className='flex flex-row items-center justify-center gap-2 px-2 py-1 font-semibold bg-dark-100 transition hover:opacity-[0.9] rounded-md'><FiExternalLink />Follow on Spotify</a>
        </div>
    )
}