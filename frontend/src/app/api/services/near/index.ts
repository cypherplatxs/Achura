import { CONTRACT_ID } from '@/config'
import { keyStores, KeyPair, connect, Contract } from 'near-api-js'

const keyStore = new keyStores.InMemoryKeyStore()

if (!process.env.NEAR_KEY) {
  throw new Error('Missing near key')
}

const keyPair = KeyPair.fromString(process.env.NEAR_KEY)

const setKey = (accountId: string) => {
  keyStore.setKey('testnet', accountId, keyPair).then(() => {
    console.log('✅ near key was set')
  })
  return {
    networkId: 'testnet',
    keyStore: keyStore,
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
    explorerUrl: 'https://explorer.testnet.near.org'
  }
}

let nearConnection: any = null

const connectNear = async (accountId: string) => {
  const connectionConfig = setKey(accountId)
  nearConnection = await connect(connectionConfig)
}

export const getAccountTransactions = async (accountId: string) => {
  try {
    if (!nearConnection) {
      await connectNear(accountId)
    }

    const account = await nearConnection.account(accountId)
    const response = await account.viewFunction({
      methodName: 'get_transaction_history',
      contractId: CONTRACT_ID,
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

export const transfer = async (
  accountId: string,
  amount: number,
  recipent: string
) => {
  try {
    if (!nearConnection) {
      await connectNear(accountId)
    }
    const account = await nearConnection.account(accountId)
    console.log(account.connection.signer)
    const contract: any = new Contract(account, CONTRACT_ID, {
      viewMethods: [],
      changeMethods: ['transfer']
    })
    await contract.transfer({
      args: {
        beneficiary_to_send: recipent,
        amount_to_send: amount
      }
    })
    console.log(account)
    console.log({ contract })
    return contract
    return true
  } catch (error) {
    console.log(error)
  }
}

export const getAccountBalance = async (accountId: string) => {
  try {
    if (!nearConnection) {
      await connectNear(accountId)
    }

    const account = await nearConnection.account(accountId)
    const balance = await account.getAccountBalance()
    console.log(balance)

    return balance.available
  } catch (error) {
    console.log(error)
  }
}
