
import React from 'react'
import { Card ,CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Skeleton } from '@nextui-org/skeleton'
import { Button } from '@nextui-org/button'

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
