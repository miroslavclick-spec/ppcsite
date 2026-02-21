import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, message } = body;

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            return NextResponse.json(
                { message: 'Telegram credentials are not configured.' },
                { status: 500 }
            );
        }

        const text = `
🔥 <b>Новая заявка с сайта!</b>
<b>Имя:</b> ${name || 'Не указано'}
<b>Телефон:</b> ${phone || 'Не указано'}
<b>Сообщение:</b> ${message || 'Нет сообщения'}
        `.trim();

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'HTML',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                { message: 'Failed to send message to Telegram', error: errorData },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
