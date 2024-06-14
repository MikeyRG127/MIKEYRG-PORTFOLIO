import Negotiator from 'negotiator'
import { NextResponse } from "next/server";

const locales = ['en', 'es'];
const defaultLocale = 'en';
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {


    const { nextUrl } = request;
    const { pathname } = nextUrl;
    const cookieStore = request.cookies;
    console.log(pathname);
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        PUBLIC_FILE.test(request.nextUrl.pathname)
    ) {
        return
    }

    // Retrieve the LANGUAGE cookie if it exists
    let language = cookieStore.get('LANGUAGE')?.value;

    // If the LANGUAGE cookie does not exist, perform language negotiation
    if (!language || pathname === undefined || pathname === "" || pathname === null) {
        const headers = { 'accept-language': request.headers.get('accept-language') };
        const negotiator = new Negotiator({ headers });
        language = negotiator.languages(locales)[0] || defaultLocale;

        // Set the LANGUAGE cookie for future requests
        const response = NextResponse.next();
        response.cookies.set('LANGUAGE', language, {
        });
        return response;
    }
    // Check if the pathname has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Redirect to the appropriate locale if not already in the URL
    nextUrl.pathname = `/${language}${pathname}`;
    return NextResponse.redirect(nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}





