import { NextRequest } from "next/server";
import { firebase } from "@/api-services";
import { User } from "@/types";

export async function POST(request: NextRequest) {
    try {
        const data: User = await request.json()
        console.log(data);


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

        return Response.json({ data: "success" })
    } catch (error) {
        return Response.json({ error: "internal error" })
    }
}

// TODO: catch other routes on global err
