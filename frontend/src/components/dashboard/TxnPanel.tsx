import { parseHash } from '@/functions'
import { Txn } from '@/types'
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import React from 'react'

function TxnPanel ({ txns }: { txns: Txn[] }) {
  const handleOnClick = async (e: any) => {
    if (e.target) {
      const textToCopy = e.target.innerText
      try {
        await navigator.clipboard.writeText(textToCopy)
      } catch (err) {
        console.error('Error al copiar texto: ', err)
      }
    } else {
      const textToCopy = e
      try {
        await navigator.clipboard.writeText(textToCopy)
      } catch (err) {
        console.error('Error al copiar texto: ', err)
      }
    }
  }
  console.debug(txns)

  return (
    <Card className='txnHistory'>
      <CardHeader>Transactions history</CardHeader>
      <Divider />
      <CardBody>
        <Table
          classNames={{
            base: 'max-h-[40vh] overflow-scroll',
          }}
          aria-label='Txn history'
        >
          <TableHeader>
            <TableColumn>Sender</TableColumn>
            <TableColumn>Beneficiary</TableColumn>
            <TableColumn>Value</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"Aún no hay transacciónes asociadas a tu cuenta."}>
            {txns.map((txn, index) => (
              <TableRow key={index}>
                <TableCell onClick={handleOnClick} className='cursor-pointer'>
                  {txn.sender}
                </TableCell>
                <TableCell
                  id={txn.beneficiary}
                  onClick={() => handleOnClick(txn.beneficiary)}
                  className='cursor-pointer'
                >
                  {parseHash(txn.beneficiary)}
                </TableCell>
                <TableCell onClick={handleOnClick} className='cursor-pointer'>
                  {txn.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default TxnPanel
