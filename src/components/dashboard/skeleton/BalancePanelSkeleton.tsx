import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Skeleton
} from '@nextui-org/react'
import React from 'react'

function BalancePanelSkeleton () {
  return (
    <Card className='balance'>
      <Skeleton >
        <CardHeader>Current balance</CardHeader>
      </Skeleton>
      <Divider />
      <CardBody>
        <Skeleton>
        <Chip variant='faded' color='success'>
          % 1000 USD
        </Chip>
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default BalancePanelSkeleton
