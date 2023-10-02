import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { near } from "@/api-services";


export async function GET(request: NextApiRequest) {
    const headersList = headers()
    const accountId = headersList.get('accountId')
    if (!accountId) {
        throw new Error("accountId is not defined");
    }

    const balance = await near.getAccountBalance(accountId)

    return NextResponse.json({
        balance
    })
}