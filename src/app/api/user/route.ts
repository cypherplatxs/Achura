import { NextRequest, NextResponse } from "next/server";
import {DB} from '@/constants/utils'
export async function GET(req:NextRequest){
    try{
        const headers = new Headers(req.headers)
        const address = headers.get('Address')
        if(!address){
        throw new Error('No address at headers')
        }
        const user = DB.find((user)=>user.address === address)
        if(!user){
        throw new Error('User not found')
        }
        return NextResponse.json({user}, {status:200})
    }catch(e:any){
        console.error(e)
        return NextResponse.json({message:'Bad request', error:e.message}, {status:400})
    }
}