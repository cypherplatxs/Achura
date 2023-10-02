import { NextResponse, NextRequest } from 'next/server'

//TODO: implement this with a real database or Blockchain


const balances: any = {
  '0x1234': '1000',
  '0x2345': '1000'
}

export async function GET(req: NextRequest) {
  try {
    const headers = new Headers(req.headers)
    const address = headers.get('Address')
    if (!address) {
      throw new Error('No address at headers')
    }
    if (!balances.hasOwnProperty(address as string)) {
      throw new Error('Address not found in balances');
    }
    return NextResponse.json(
      { balance: balances[address as string] },
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
