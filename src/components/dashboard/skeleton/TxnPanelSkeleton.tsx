import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import React from 'react'

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
