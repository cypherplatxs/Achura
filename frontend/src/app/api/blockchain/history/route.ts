import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { near } from "@/api-services";
export async function GET () {
  try {
    const headersList = headers()
    const accountId = headersList.get('accountId')
    if (!accountId) {
      throw new Error('accountId is not defined')
    }
    const data = await near.getAccountTransactions(accountId)

    return NextResponse.json({
      data
    }, {status:200})
  } catch (error) {
    return NextResponse.json({ error }, { status: 401 })
  }
}
