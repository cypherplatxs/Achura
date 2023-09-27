import { Founder, Organization } from '@/types/user.types'
import { NextResponse, NextRequest } from 'next/server'



export async function GET () {
  return NextResponse.json({ hello: 'world' })
}

let User = {}


//TODO: implementar validaciones mas precisas con ZOD, JSON Schema o Joi
function validateData (
  userType: 'organization' | 'founder',
  userData: Founder | Organization
) {
  if (userType === 'founder') {
    const { walletName, address, accountName }: Founder = userData as Founder
    if (
      walletName &&
      address &&
      accountName &&
      typeof walletName === 'string' &&
      typeof address === 'string' &&
      typeof accountName === 'string'

    ) {
      return
    }
  } else if (userType === 'organization') {
    const {
      walletName,
      address,
      accountName,
      taxRegistrationNumber,
      country,
      legalRepresentative
    }: Organization = userData as Organization
    if (
      walletName &&
      address &&
      accountName &&
      taxRegistrationNumber &&
      country &&
      legalRepresentative &&
      typeof walletName === 'string' &&
      typeof address === 'string' &&
      typeof accountName === 'string' &&
      typeof taxRegistrationNumber === 'number' &&
      typeof country === 'string' &&
      typeof legalRepresentative === 'string'
    ) {
      return
    }
  }
  throw new Error('Bad request')
}

export async function POST (req: NextRequest) {
  const body = await req.json()
  if (body.userType === 'founder') {
    try {
      const { userType, walletName, address, accountName }: Founder = body
      validateData(userType, body)
      User = {
        userType,
        walletName,
        address,
        accountName
      }
    } catch (e) {
      console.error(e)
      return NextResponse.json({ error: 'Bad request' }, { status: 400 })
    }
  } else if (body.userType === 'organization') {
    try {
      const {
        userType,
        walletName,
        address,
        accountName,
        taxRegistrationNumber,
        country,
        legalRepresentative
      }: Organization = body
      validateData(userType, body)
      User = {
        userType,
        walletName,
        address,
        accountName,
        taxRegistrationNumber,
        country,
        legalRepresentative
      }
    } catch (e) {
      console.error(e)
      return NextResponse.json({ error: 'Bad request' }, { status: 400 })
    }
  } else {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
  return NextResponse.json(User, { status: 201 })
}
