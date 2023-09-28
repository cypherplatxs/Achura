import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Skeleton
} from '@nextui-org/react'
import React from 'react'

function WithdrawPanelSkeleton () {
  return (
    <Card className='with_Fund'>
      <Skeleton>
        <CardHeader>Withdraw funds</CardHeader>
      </Skeleton>
      <Divider />
      <CardBody>
        <Skeleton>
          <Button variant='shadow'>Withdraw!</Button>
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default WithdrawPanelSkeleton
