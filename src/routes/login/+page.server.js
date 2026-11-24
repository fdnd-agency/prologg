import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        // Plain input sends one "number" field; the 16 boxes send 16 "digit" fields
        const number = String(data.get('number') ?? data.getAll('digit').join(''));

        if (!/^\d{16}$/.test(number)) {
            return fail(400, { error: 'Please enter exactly 16 digits.', number });
        }

        cookies.set('loginNumber', number, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 365
        });

        redirect(303, '/');
    }
};