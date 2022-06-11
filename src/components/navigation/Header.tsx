import { Link, NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../state/recoil';

function CustomNavLink({ to, children }: { to: string, children: string|JSX.Element[]|JSX.Element }) {
    return (<NavLink to={to} className={({ isActive }) => isActive ? "nav-link-active" : 'nav-link'}>{children}</NavLink>)
}

export default function Header() {
    const [token, ] = useRecoilState(tokenState);

    return (
        <nav className='bg-black fixed w-full flex shadow-md'>
            <div className='container max-w-4xl mx-auto p-3 flex flex-row items-center gap-5'>
                <Link to='/'><h1 className='text-2xl font-bold text-accent-200'>Graphify</h1></Link>
                { token && (
                    <div className='flex flex-row items-center gap-3'>
                        <CustomNavLink to='/'>Profile</CustomNavLink>
                        <CustomNavLink to='/artists'>Artists</CustomNavLink>
                        <CustomNavLink to='/tracks'>Tracks</CustomNavLink>
                        <CustomNavLink to='/logout'>Logout</CustomNavLink>
                    </div>
                ) }
            </div>
        </nav>
    )
}