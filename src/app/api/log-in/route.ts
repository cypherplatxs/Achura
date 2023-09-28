import { NextRequest, NextResponse } from 'next/server'
import { UsersDB } from '@/constants/utils'

export async function POST (request: NextRequest) {
  const headers = new Headers(request.headers)
  const address = headers.get('Address')
  if (!address) {
    throw new Error('No address at headers')
  }
  try {
    const logedUser = UsersDB.find((user) => user.address === address)
    if (!logedUser) {
      throw new Error('User not found')
    }
    return NextResponse.json(logedUser, { status: 200 })
} catch (e: any) {
    console.error(e)
    return NextResponse.json(
      { message: 'Bad request', error: e.message },
      { status: 400 }
    )
  }
}
