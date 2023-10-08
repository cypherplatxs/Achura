import { NextRequest, NextResponse } from "next/server";
import { firebase } from "@/api-services";
import { User } from "@/types";

export async function POST(request: NextRequest) {
    try {
        const data: User = await request.json()

        // verify wallet id is new

        // get kyc data from request body

        // hash kyc data

        // verify kyc data hash is new

        // save kyc data on kyc db
        await firebase.addData(
            'users',
            data.accountId,
            data
        )

        // save kyc-data-id and wallet-id on users db

        // return success message

        return NextResponse.json({ data: "success" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "internal error" }, { status: 500 })
    }
}

// TODO: catch other routes on global err
