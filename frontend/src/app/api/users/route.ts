import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { firebase } from '@/api-services'

export async function GET () {
  const headersList = headers()
  const accountId = headersList.get('accountId')
  if (!accountId) {
    throw new Error('accountId is not defined')
  }

  try {
    const res = await firebase.geItem('users', 'accountId')
    console.log(res)
    if (
      typeof res?.users === 'undefined' ||
      typeof res?.accountId === 'undefined'
    ) {
      throw new Error('user not found')
    }

    return NextResponse.json({
      headersList
    })
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}
