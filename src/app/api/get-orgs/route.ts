import { OrgsDB } from "@/constants/utils";
import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({ orgs: OrgsDB }, { status: 200 })
}