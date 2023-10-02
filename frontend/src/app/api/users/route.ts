import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { firebase } from "@/api-services";


export async function GET() {
    const headersList = headers()
    const accountId = headersList.get('accountId')
    if (!accountId) {
        throw new Error("accountId is not defined");
    }

    const res = await firebase.geItem(
        'users',
        "accountId"
    )
    console.log(res);

    return NextResponse.json({
        headersList
    })
}