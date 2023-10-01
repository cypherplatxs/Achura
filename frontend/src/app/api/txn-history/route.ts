import { Address, Histories } from '@/types/index.types'
import { NextResponse, NextRequest } from 'next/server'

//TODO: implement this with a real database or Blockchain

const histories: Histories = {
  '0x1234': [
    {
      hash: '0x1234',
      to: '0x1234',
      amount: 1000,
      date: '2021-09-01'
    },
    {
      hash: '0x1234',
      to: '0x1234',
      amount: 1000,
      date: '2021-09-01'
    },
    {
      hash: '0x1234',
      to: '0x1234',
      amount: 1000,
      date: '2021-09-01'
    }
  ],
  '0x2345': [
    {
      hash: '0x1234',
      to: '0x1234',
      amount: 1000,
      date: '2021-09-01'
    },
    {
      hash: '0x1234',
      to: '0x1234',
      amount: 1000,
      date: '2021-09-01'
    },
    {
      hash: '0x1234',
      to: '0x1234',
      amount: 1000,
      date: '2021-09-01'
    }
  ]
}

export async function GET (req: NextRequest) {
  try {
    const headers = new Headers(req.headers)
    const address = headers.get('Address')
    if (!address) {
      throw new Error('No address at headers')
    }
    if (!histories.hasOwnProperty(address as Address)) {
      throw new Error('Address not found in histories')
    }
    return NextResponse.json(
      { txnHistory: histories[address as Address] },
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
