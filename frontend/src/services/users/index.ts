import { config } from '@/services'
import { User } from '@/types'
import axios from 'axios'

export const register = async (data: User) => {
  try {
    const response = await axios.post(`${config.API_BASE_URL}/users/register`, {
      ...data
    })
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

export const getUser = async (accountId: string) => {
  try {
    const response = await axios.get(`${config.API_BASE_URL}/users`, {
      headers: {
        accountId
      }
    })
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
