export type Address = `0x${string}`

export type Balances = {
    [address in Address]?: string
  }
  
export type Txn = {
    hash: string
    beneficiary: Address
    amount: number
    date: string
    sender: Address
}

export type Histories = {
    [address in Address]?: Txn[]
  }

export type WalletContextType = Address