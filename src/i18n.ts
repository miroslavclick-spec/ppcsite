import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'ru', 'uk'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
    // Next.js 15 requires awaiting the locale
    const reqLocale = await requestLocale;

    if (!reqLocale || !locales.includes(reqLocale as typeof locales[number])) {
        notFound();
    }

    return {
        locale: reqLocale,
        messages: (await import(`../messages/${reqLocale}.json`)).default
    };
});
