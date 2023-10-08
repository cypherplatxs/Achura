export enum UserType {
  sponsor = 'sponsor',
  organization = 'organization',
}

type Representative = {
  representativeName: string,
  representativeIdentificationNumber: number,
  representativeEmail: string,
}

type LegalEntity = {
  legalEntityName: string,
  legalDescription: number,
  legalEntityEmail: string,
  legalEntityAddress: string,
  legalEntityTaxRegistrationNumber: number,
  legalEntityCountry: string,
}

type Wallet = {
  accountId: string,
  publicKey: string
}

export type User = Wallet & Representative & LegalEntity & {
  type: UserType
}
