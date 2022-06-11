import { useMemo, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { useRecoilState } from 'recoil';
import Login from './pages/auth/Login';
import Profile from './pages/Profile';
import { expirationState, tokenState } from './state/recoil';
import Callback from './pages/auth/Callback';
import dayjs from 'dayjs';
import Logout from './pages/auth/Logout';
import Header from './components/navigation/Header';
import TopArtists from './pages/private/TopArtists';
import TopTracks from './pages/private/TopTracks';

function App() {
    const [token, setToken] = useRecoilState(tokenState);
    const [expiration, setExpiration] = useRecoilState(expirationState);

    useEffect(() => {
        if (!token || !expiration) return;

        if (dayjs(expiration).diff(dayjs(), 's') <= 0) {
            console.log("Session expired.");

            setToken(null);
            setExpiration(null);
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
        }
    }, []);

    const routes = useMemo(() => {
        // If not authorized, redirect to login
        if (!token) return (
            <>
                <Route path="/login" element={<Login/>}/>
                <Route path="/callback" element={<Callback/>}/>
                <Route path="/*" element={<Navigate replace to="/login"/>}/>
            </>
        )

        return (
            <>
                <Route path="/" element={<Profile/>}/>
                <Route path="/artists" element={<TopArtists/>}/>
                <Route path="/tracks" element={<TopTracks/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/*" element={<Navigate replace to="/"/>}/>
            </>
        )
    }, [token]);

    return (
        <>
            <Header />
            <div className='bg-dark-200 flex flex-col p-3 h-screen overflow-y-auto'>
                <Routes>
                    {routes}
                </Routes>
            </div>
        </>
    )
}

export default App;
