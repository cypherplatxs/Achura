import { NextResponse, NextRequest } from 'next/server'

//TODO: implement this with a real database or Blockchain

type Address = `0x${string}`

type Balances = {
  [address in Address]?: string
}

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
