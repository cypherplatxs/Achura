import { NextRequest, NextResponse } from 'next/server'
import { firebase, near } from '@/api-services'
import { User } from '@/types'
import { headers } from 'next/headers'

export async function POST (request: NextRequest) {
  try {
    const headersList = headers()
    const accountId = headersList.get('accountId')
    if (!accountId) {
        throw new Error('accountId is not defined')
      }
    const { amount, recipent } = await request.json()
    const data = await near.transfer(accountId as string, amount, recipent)
    console.log({data})
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}

// TODO: catch other routes on global err