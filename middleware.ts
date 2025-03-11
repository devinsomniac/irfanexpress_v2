import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export const middleware = async(req:NextRequest) => {
    const session = await auth()
    if(!session){
        return NextResponse.redirect(new URL('/',req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher:["/Profile/:id*"]
}