import { Artist, Track, TrackArtist } from '../types/spotify';
import { FiExternalLink } from 'react-icons/fi';

export default function TrackPanel({ track, order }: { track: Track, order: number }) {
    return (
        <div className='flex items-center gap-5 bg-dark-100 w-full p-5 my-2 rounded-lg shadow-md'>
            <div className='bg-accent-100 min-w-[50px] min-h-[50px] flex items-center justify-center font-bold text-2xl rounded-full'>{order}</div>
            <div className='inline-flex flex-col gap-1 items-start'>
                <p className='text-2xl font-semibold'>{track.name}</p>
                <p className='text-1xl'>{track.artists.map((artist: TrackArtist) => artist.name).join(", ")}</p>
            </div>
        </div>
    )
}