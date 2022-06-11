import { useState, useEffect, Fragment } from 'react';
import useApi from '../../hooks/useApi';
import { Artist, TimeRange } from '../../types/spotify';
import ArtistPanel from '../../components/ArtistPanel';
import { Listbox, Transition } from '@headlessui/react';
import { AiOutlineDown } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';

export interface RangeOption { 
    name: string;
    value: TimeRange
}

export const timeOptions = [
    { name: "This month", value: "short_term" },
    { name: "6 months", value: "medium_term" },
    { name: "All time", value: "long_term" }
] as RangeOption[];

export default function TopArtists() {
    const api = useApi();
    const [artists, setArtists] = useState<Artist[]>([]);
    const [selected, setSelected] = useState<RangeOption>(timeOptions[1]);

    async function fetchProfileData(range: TimeRange) {
        try {
            const { data: { items } } = await api.spotify.artists(10, range);
            setArtists(items);
        }
        catch (e: any) {
            console.error(e);
        }
    }

    function updateSelection(val: RangeOption) {
        setSelected(val);
        fetchProfileData(val.value);
    }

    useEffect(() => {
        fetchProfileData(selected.value);
    }, []);

    return (
        <div className='flex flex-col container max-w-4xl mx-auto text-white justify-center mt-10'>
            <div className='flex flex-row items-center justify-between'>
                <h2 className='text-3xl font-bold my-7'>Your Top {artists.length} artists</h2>
                <div className='flex flex-row items-center gap-2'>
                    <span className='hidden md:block'>Time range:</span>
                    <Listbox value={selected} onChange={updateSelection}>
                        <div className="relative mt-1 min-w-[150px]">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-dark-100 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <AiOutlineDown className="h-5 w-5 text-gray-400" />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {timeOptions.map((option, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-dark-200 text-accent-100' : 'text-white'}`}
                                            value={option}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                        {option.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <BsCheck className="h-5 w-5 text-accent-100" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>                    
                </div>
            </div>
            {artists.map((artist: Artist, index: number) => (<ArtistPanel artist={artist} order={index + 1} key={index} />))}
        </div>
    )    
}