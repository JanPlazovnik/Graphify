import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { expirationState, tokenState } from '../../state/recoil';
import { useNavigate } from 'react-router';

export default function Logout() {
    const navigate = useNavigate();
    const [, setToken] = useRecoilState(tokenState);
    const [, setExpiration] = useRecoilState(expirationState);

    useEffect(() => {
        setToken(null);
        setExpiration(null)
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");

        navigate("/", { replace: true });
    }, []);

    return (<></>)
}