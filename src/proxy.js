import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {

const session = await auth.api.getSession({
    headers: await headers()
})

if (session) {
    return NextResponse.next();
}

    const originUrl = request.nextUrl.pathname;
    
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackURL', originUrl);

    return NextResponse.redirect(loginUrl);

}
 
export const config = {
  matcher: ['/product/:id', '/my-profile'],
}