import { NextResponse } from 'next/server'
import { getAccountTransactions } from '../../services/near'
import { headers } from 'next/headers'

export async function GET () {
  try {
    const headersList = headers()
    const accountId = headersList.get('accountId')
    if (!accountId) {
      throw new Error('accountId is not defined')
    }
    const data = await getAccountTransactions(accountId)
    console.log({ data }, typeof data)
    return NextResponse.json({
      data
    })
  } catch (error) {
    return NextResponse.json({ error }, { status: 401 })
  }
}
