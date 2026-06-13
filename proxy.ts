import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
import {toNextJsHandler} from "better-auth/next-js"

export default toNextJsHandler(auth);

export async function proxy(req: NextRequest) {
    const session = auth.api.getSession({
        headers: req.headers
    })

    const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");

    if(!isDashboard && !session) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"]
}