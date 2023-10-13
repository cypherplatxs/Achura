import { keyStores, KeyPair, connect, Contract } from 'near-api-js'

const keyStore = new keyStores.InMemoryKeyStore()

if(!process.env.NEAR_KEY) {
  throw new Error("Missing near key");
}

const keyPair = KeyPair.fromString(process.env.NEAR_KEY)

keyStore.setKey('testnet', 'example-account.testnet', keyPair).then(() => {
  console.log('✅ near key was set')
})

const connectionConfig = {
  networkId: 'testnet',
  keyStore: keyStore,
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org'
}
let nearConnection: any = null

const connectNear = async () => {
  nearConnection = await connect(connectionConfig)
}

export const getAccountTransactions = async (accountId: string) => {
  try {
    if (!nearConnection) {
      await connectNear()
    }

    const account = await nearConnection.account(accountId)
    const response = await account.viewFunction({
      methodName: "get_transaction_history",
      contractId: "juminstock1.testnet",
      args: {
          account_id: accountId
        }
    })
    console.log(response)

    return response
  } catch (error) {
    console.log(error)
  }
}

export const transfer = async (accountId: string, amount: number, recipent: string) => {
  try {
    if (!nearConnection) {
      await connectNear()
    }

    const account = await nearConnection.account(accountId)
    const response = await account.functionCall({
      args: {beneficiary_to_send: recipent,
      amount}, contractId: 'juminstock1.testnet'
    })

    return response

  } catch (error) {
    console.log(error)
  }
}

export const getAccountBalance = async (accountId: string) => {
  try {
    if (!nearConnection) {
      await connectNear()
    }

    const account = await nearConnection.account(accountId)
    const balance = await account.getAccountBalance()
    console.log(balance)

    return balance.available
  } catch (error) {
    console.log(error)
  }
}
