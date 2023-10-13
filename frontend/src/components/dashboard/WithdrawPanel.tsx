import { Button, Card, CardBody, CardHeader, Divider, Link } from '@nextui-org/react'
import React from 'react'

function WithdrawPanel () {
  return (
    <Card className='with_Fund'>
      <CardHeader>Withdraw funds</CardHeader>
      <Divider />
      <CardBody>
        <Button
          href='https://ramptest.alchemypay.org/#/'
          target='_blank'
          as={Link}
          variant='shadow'
        >
          Withdraw!
        </Button>
      </CardBody>
    </Card>
  )
}

export default WithdrawPanel
