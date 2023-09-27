import { NextResponse, NextRequest } from 'next/server'
export async function GET(){
    return NextResponse.json({ hello: 'world'})
}

export async function POST(req: NextRequest){
    const body = await req.json()
    if (!body) return NextResponse.json({error: 'Bad request'} , { status: 400 } )
    if(body.userType === 'founder'){
        
    }
    console.log(body)
    return NextResponse.json({ hello: 'world'})
}