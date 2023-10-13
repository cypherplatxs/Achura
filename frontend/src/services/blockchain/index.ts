import { config } from '@/services'
import axios from 'axios'
export const getTxsHistory = async (accountId: string) => {
  const response = await axios.get(
    `${config.API_BASE_URL}/blockchain/history`,
    {
      headers: {
        accountId
      }
    }
  )
  return response.data
}

export const fundOrg = async (
  accountId: string,
  amount: number,
  recipent: string
) => {
  const response = await axios.post(
    `${config.API_BASE_URL}/blockchain/transfer`,
    {
      recipent,
      amount
    },
    {
      headers: {
        accountId
      }
    }
  )
  return response.data
}

export const getBalance = async (accountId: string) => {
  try {
    const response = await axios.get(
      `${config.API_BASE_URL}/blockchain/balance`,
      {
        headers: {
          accountId
        }
      }
    )
    return response.data
  } catch (error) {
    // todo global wrap errors such as
    // err path: "services/users/register"
    // err body: error
    const location = 'services/users/register'
    console.log(location, error)
    throw new Error(`error @ ${location}`)
  }
}
