import { NextResponse } from 'next/server'
import { firebase } from '@/api-services'

export async function GET() {
    try {
        const response = await firebase.getOrgs('users')

        return NextResponse.json({
            data: response
        })
    } catch (error: any) {
        // console.log(error.message)
        return NextResponse.json(
            {
                error: {
                    message: error.message
                }
            },
            { status: 401 }
        )
    }
}
