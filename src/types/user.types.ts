export type Founder = {
  //TODO: Add template literals to walletName
  userType: 'founder'
  walletName: string
  address: `0x${string}`
  accountName: string
}
export type Organization = {
  //TODO: Add template literals to walletName
  walletName: string
  userType: 'organization'
  address: `0x${string}`
  accountName: string
  taxRegistrationNumber: number
  country: string
  legalRepresentative: string
}
