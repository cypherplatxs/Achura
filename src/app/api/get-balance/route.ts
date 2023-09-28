import { Address, Balances } from '@/types/index.types'
import { NextResponse, NextRequest } from 'next/server'

//TODO: implement this with a real database or Blockchain


const balances: Balances = {
  '0x1234': '1000'
}

export async function GET (req: NextRequest) {
  try {
    const headers = new Headers (req.headers)
    const address = headers.get('Address')
    if (!address) {
      throw new Error('No address at headers')
    }
    if (!balances.hasOwnProperty(address as Address)) {
      throw new Error('Address not found in balances');
    }
    return NextResponse.json(
      { balance: balances[address as Address] },
      { status: 200 }
    )
  } catch (e: any) {
    console.error(e)
    return NextResponse.json(
      { message: 'Bad request', error: e.message },
      { status: 400 }
    )
  }
}
