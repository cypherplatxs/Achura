import { NextResponse } from 'next/server'
import { getAccountTransactions } from '../../services/near'
import { headers } from 'next/headers'

export async function GET() {
    try {

    
    const headersList = headers()
    const accountId = headersList.get('accountId')
    if (!accountId) {
        throw new Error('accountId is not defined')
    }
    const data = await getAccountTransactions(accountId)
    return NextResponse.json({
        data: data.stringify()
    });
    }
    catch(error) {
        console.log(error.message)
    }
}

