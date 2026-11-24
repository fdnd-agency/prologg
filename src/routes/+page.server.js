import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
    return { number: locals.number };
}

export const actions = {
    logout: async ({ cookies }) => {
        cookies.delete('loginNumber', { path: '/' });
        redirect(303, '/login');
    }
};