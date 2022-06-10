import useApi from '../../hooks/useApi';
import { BsSpotify } from 'react-icons/bs';

export default function Login() {
    const api = useApi();

    return (
        <div className='h-full flex items-center justify-center py-12 px-4'>
            <a 
                href={api.spotify.getAuthLink()} 
                className='flex items-center justify-center gap-[10px] bg-accent-200 text-dark-100 text-1xl px-5 py-3 rounded-lg shadow font-semibold transition hover:scale-105'
            >
                <BsSpotify className='text-3xl text-white'/>
                Login to Spotify
            </a>
        </div>
    )
}