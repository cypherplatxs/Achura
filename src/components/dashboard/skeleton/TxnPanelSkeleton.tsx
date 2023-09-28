import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Skeleton } from '@nextui-org/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/table'

function TxnPanelSkeleton () {
  return (
    <Card className='txnHistory'>
      <Skeleton>
        <CardHeader>Transactions history</CardHeader>
      </Skeleton>
      <Divider />
      <CardBody>
        <Skeleton className='rounded-md'>
          <Table aria-label='Txn history'>
            <TableHeader>
              <TableColumn>Txn hash</TableColumn>
              <TableColumn>To</TableColumn>
              <TableColumn>Value</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key={1}>
                <TableCell>0x1234</TableCell>
                <TableCell>0x1234</TableCell>
                <TableCell>10000</TableCell>
              </TableRow>
              <TableRow key={2}>
                <TableCell>0x1234</TableCell>
                <TableCell>0x1234</TableCell>
                <TableCell>10000</TableCell>
              </TableRow>
              <TableRow key={3}>
                <TableCell>0x1234</TableCell>
                <TableCell>0x1234</TableCell>
                <TableCell>10000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default TxnPanelSkeleton
