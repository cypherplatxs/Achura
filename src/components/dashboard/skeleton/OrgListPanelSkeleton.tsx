import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Skeleton
} from '@nextui-org/react'
import React from 'react'

function OrgListPanelSkeleton () {
  return (
    <Card className='orgList w-full  p-5 rounded-md gap-5 flex flex-col'>
      <CardHeader>
        <Skeleton className='rounded-md'>
          <h2 className='text-black'>Organization list</h2>
        </Skeleton>
      </CardHeader>

      <Divider />
      <div className='w-full grid overflow-y-scroll gap-5 lg:grid-cols-2 p-2 rounded-md max-h-64'>
          <Skeleton className='rounded-md'>
            <Card>
              <CardHeader>idk.near</CardHeader>
              <Divider />
              <CardBody className='gap-2'>
                <p>some description</p>
                <Skeleton>
                  <Button>Fund!</Button>
                </Skeleton>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton className='rounded-md'>
            <Card>
              <CardHeader>idk.near</CardHeader>
              <Divider />
              <CardBody className='gap-2'>
                <p>some description</p>
                <Skeleton>
                  <Button>Fund!</Button>
                </Skeleton>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton className='rounded-md'>
            <Card>
              <CardHeader>idk.near</CardHeader>
              <Divider />
              <CardBody className='gap-2'>
                <p>some description</p>
                <Skeleton>
                  <Button>Fund!</Button>
                </Skeleton>
              </CardBody>
            </Card>
          </Skeleton>
          <Skeleton className='rounded-md'>
            <Card>
              <CardHeader>idk.near</CardHeader>
              <Divider />
              <CardBody className='gap-2'>
                <p>some description</p>
                <Skeleton>
                  <Button>Fund!</Button>
                </Skeleton>
              </CardBody>
            </Card>
          </Skeleton>
      </div>
    </Card>
  )
}

export default OrgListPanelSkeleton
