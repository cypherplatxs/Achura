export type Founder = {
  //TODO: Add template literals to walletName
  userType: 'founder'
  walletName: string
  address: `0x${string}`
  accountName: `${string}.near`
}
export type Organization = {
  //TODO: Add template literals to walletName
  walletName: string
  userType: 'organization'
  address: `0x${string}`
  accountName: `${string}.near`
  taxRegistrationNumber: number
  country: string
  legalRepresentative: string
}
