import { Track, TrackArtist } from '../types/spotify';

export default function TrackPanel({ track, order }: { track: Track, order: number }) {
    function getBadgeColor(): string {
        if (order == 1) return 'bg-yellow-500'
        if (order == 2) return 'bg-stone-400'
        if (order == 3) return 'bg-amber-700'
        return 'bg-accent-100'
    }

    return (
        <div className='flex items-center gap-5 bg-dark-100 w-full p-5 my-2 rounded-lg shadow-md'>
            <div className={`${getBadgeColor()} min-w-[50px] min-h-[50px] flex items-center justify-center font-bold text-2xl rounded-full`}>{order}</div>
            <div className='inline-flex flex-col gap-1 items-start'>
                <p className='text-2xl font-semibold'>{track.name}</p>
                <p className='text-1xl'>{track.artists.map((artist: TrackArtist) => artist.name).join(", ")}</p>
            </div>
            <img src={track.album.images[1].url} className='ml-auto max-w-[50px] rounded-full' />
        </div>
    )
}