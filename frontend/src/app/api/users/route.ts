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
    const response = await firebase.geItem('users', accountId)

    return NextResponse.json({
      data: response
    })
  } catch (error: any) {
    // console.log(error.message)
    return NextResponse.json(
      {
        error: {
          message: error.message
        }
      },
      { status: 401 }
    )
  }
}
