import { Txn } from '@/types/index.types'
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
  return (
    <Card className='txnHistory'>
      <CardHeader>Transactions history</CardHeader>
      <Divider />
      <CardBody>
        <Table aria-label='Txn history'>
          <TableHeader>
            <TableColumn>Txn hash</TableColumn>
            <TableColumn>To</TableColumn>
            <TableColumn>Value</TableColumn>
          </TableHeader>
          <TableBody>
            {txns.map((txn, index) => (
              <TableRow key={index}>
                <TableCell>{txn.hash}</TableCell>
                <TableCell>{txn.to}</TableCell>
                <TableCell>{txn.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default TxnPanel
