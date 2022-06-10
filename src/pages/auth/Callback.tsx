import { useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { expirationState, tokenState } from '../../state/recoil';
import dayjs from 'dayjs';

export default function Callback() {
    const location = useLocation();
    const navigate = useNavigate();
    const [, setToken] = useRecoilState(tokenState);
    const [, setExpiration] = useRecoilState(expirationState);

    useEffect(() => {
        const hash = location.hash.replace("#", "?");
        const access_token = new URLSearchParams(hash).get("access_token")

        if (access_token) {
            localStorage.setItem("token", access_token);

            // Store time of token expiration - 3600 seconds from now
            const expiration = dayjs().add(dayjs.duration(3600, 's')).toISOString()
            localStorage.setItem("token_expiry", expiration);

            setToken(access_token);
            setExpiration(expiration)
        }
        
        navigate("/", {replace: true});
    }, []);

    return (<></>)
}