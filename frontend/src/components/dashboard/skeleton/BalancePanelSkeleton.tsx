import {Card, CardBody, CardHeader} from '@nextui-org/card'
import {Chip} from '@nextui-org/chip'
import {Divider} from '@nextui-org/divider'
import {Skeleton} from '@nextui-org/skeleton'
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
