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
  amount: string,
  recipent: string
) => {
  try {
    if (!nearConnection) {
      await connectNear(accountId)
    }
    const account = await nearConnection.account(accountId)

    console.log(accountId, typeof amount, recipent)
    console.log(account.connection.signer)
    const contract: any = new Contract(account, CONTRACT_ID, {
      viewMethods: [],
      changeMethods: ['transfer']
    })
    const response = await contract.transfer(
      {
        beneficiary_to_send: recipent
      },
      '300000000000000', 
      parseInt(amount) 
    )
    console.log(response)
    // const contract = await account.functionCall(
    //   { beneficiary_to_send: recipent},
    //   CONTRACT_ID,
    //   'transfer',
    //   parseFloat(amount)

    // )

    return response
  } catch (error) {
    console.log(error)
  }
}

export const withdraw = async (
  accountId: string,
  amount: number,
  recipent: string
) => {
  try {
    if (!nearConnection) {
      await connectNear(accountId)
    }

    const account = await nearConnection.account(accountId)
    const response = await account.functionCall({
      args: { beneficiary_to_send: recipent, amount },
      contractId: CONTRACT_ID
    })

    return response
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
