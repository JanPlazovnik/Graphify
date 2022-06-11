import useApi from '../../hooks/useApi';
import { BsSpotify } from 'react-icons/bs';

export default function Login() {
    const api = useApi();

    return (
        <div className='h-full flex flex-col items-start justify-center py-12 gap-3 container max-w-4xl mx-auto p-3'>
            {/* Message */}
            <h1 className='text-4xl font-bold text-white'>Your Spotify stats &ndash; anywhere, anytime.</h1>
            <p className='text-lg text-gray-400'>View details about your favourite tracks and artists in the past <span className='utext'>month</span>, <span className='utext'>6 months</span> or <span className='utext'>all time</span>.</p>
            {/* Login Button */}
            <a
                href={api.spotify.getAuthLink()}
                className='flex items-center justify-center gap-[10px] bg-accent-200 text-dark-100 text-1xl px-5 py-3 rounded-lg shadow font-semibold transition hover:scale-105'
            >
                <BsSpotify className='text-3xl' />
                Login with Spotify
            </a>   
        </div>
    )
}