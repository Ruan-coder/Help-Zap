import { loginMock } from '../../../../mocks/api';

export async function POST(req) {
    const body = await req.json();

    try {
        const { email, password } = body;
        const response = await loginMock(email, password);
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
