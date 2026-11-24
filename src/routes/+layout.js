import { redirect } from '@sveltejs/kit';

export const ssr = false;

export function load({ url }) {
    const loggedIn = localStorage.getItem('loginNumber') !== null;
    const onLoginPage = url.pathname === '/login';

    if (!loggedIn && !onLoginPage) redirect(307, '/login');
    if (loggedIn && onLoginPage) redirect(307, '/');
}