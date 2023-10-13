import { NextRequest, NextResponse } from "next/server";
import { firebase, near } from "@/api-services";
import { User } from "@/types";

export async function POST(request: NextRequest) {
    try {
        const {accountId, amount, recipent} = await request.json()
        const data = await near.transfer(accountId, amount, recipent)

        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "internal error" }, { status: 500 })
    }
}

// TODO: catch other routes on global err