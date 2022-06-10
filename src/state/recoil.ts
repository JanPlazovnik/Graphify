import { atom } from 'recoil';

const tokenState = atom<string|null>({
    key: 'token',
    default: localStorage.getItem("token")
});

const expirationState = atom<string | null>({
    key: 'token_expiry',
    default: localStorage.getItem("token_expiry")
});

export { tokenState, expirationState };