import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json()

    console.log(data);



    // verify wallet id is new

    // get kyc data from request body

    // hash kyc data

    // verify kyc data hash is new

    // save kyc data on kyc db

    // save kyc-data-id and wallet-id on users db

    // return success message

    return Response.json({ data: "success" })
}

// TODO: catch other routes on global err
