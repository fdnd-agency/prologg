import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    event.locals.number = event.cookies.get('loginNumber') ?? null;

    const onLoginPage = event.url.pathname === '/login';

    if (!event.locals.number && !onLoginPage) redirect(303, '/login');
    if (event.locals.number && onLoginPage && event.request.method === 'GET') redirect(303, '/');

    return resolve(event);
}