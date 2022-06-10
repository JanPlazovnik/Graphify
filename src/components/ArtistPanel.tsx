import { Artist } from '../types/spotify';
import { FiExternalLink } from 'react-icons/fi';

export default function ArtistPanel({artist, order}: {artist: Artist, order: number}) {
    return (
        <div className='flex items-center gap-5 bg-dark-100 w-full p-5 my-2 rounded-lg shadow-md'>
            <div className='bg-accent-100 min-w-[50px] min-h-[50px] flex items-center justify-center font-bold text-2xl rounded-full'>{order}</div>
            <div className='inline-flex flex-col gap-1 items-start'>
                <p className='text-2xl font-semibold'>{artist.name}</p>
                {/* <a 
                    href={artist.external_urls.spotify} 
                    target="_blank" 
                    rel='noreferrer'
                    className='flex items-center gap-2 px-1 py-1 rounded-md bg-black opacity-[0.5] hover:opacity-[0.7] transition'
                >
                    <FiExternalLink className='text-[0.9rem]'/>Spotify
                </a> */}
            </div>
        </div>
    )
}