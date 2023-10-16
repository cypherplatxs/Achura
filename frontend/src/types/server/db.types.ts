import { Address } from "./index.types"

export type Organization = {
    name: string
    description:string
  }
  export type UserAccessType = {
    name:`${string}.near`
    address: Address
    role: 'founder' | 'organization'
}