import { UserType } from '@/types/index.types'
import { NextRequest, NextResponse } from 'next/server'

const users: UserType[] = [
  {
    name: 'idk.near',
    address: '0x1234',
    role:'organization'
  }
]

export async function POST (request: NextRequest) {
  const headers = new Headers(request.headers)
  const address = headers.get('Address')
  if (!address) {
    throw new Error('No address at headers')
  }
  try {
    const logedUser = users.find((user) => user.address === address)
    return NextResponse.json(logedUser, { status: 200 })
} catch (e: any) {
    console.error(e)
    return NextResponse.json(
      { message: 'Bad request', error: e.message },
      { status: 400 }
    )
  }
}
