import { Link, NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../state/recoil';

function CustomNavLink({ to, children }: { to: string, children: string|JSX.Element[]|JSX.Element }) {
    return (<NavLink to={to} className={({ isActive }) => isActive ? "nav-link-active" : 'nav-link'}>{children}</NavLink>)
}

export default function Header() {
    const [token, ] = useRecoilState(tokenState);

    return (
        <nav className='bg-black fixed p-3 w-full justify-center flex shadow-md z-[9999]'>
            <div className='container max-w-4xl flex flex-row gap-5'>
                <Link to='/'><h1 className='text-2xl font-bold text-accent-200'>Spotify Stats</h1></Link>
                { token && (
                    <>
                        <div className='flex flex-row items-center gap-3 mr-auto'>
                            <CustomNavLink to='/'>Profile</CustomNavLink>
                            <CustomNavLink to='/artists'>Artists</CustomNavLink>
                            <CustomNavLink to='/tracks'>Tracks</CustomNavLink>
                        </div>
                        <CustomNavLink to='/logout'>Logout</CustomNavLink>
                    </>
                ) }
            </div>
        </nav>
    )
}