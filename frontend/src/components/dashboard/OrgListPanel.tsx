import { Organization } from '@/types/index.types'
import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'
import React from 'react'

function OrgListPanel ({ orgs }: { orgs: Organization[] }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.debug('Funding!')
    onClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className='text-black flex flex-col gap-1'>
            Fund panel
          </ModalHeader>
          <form onSubmit={handleOnSubmit}>
            <ModalBody>
              <Input
                className='text-black'
                isRequired
                type='number'
                label='Amount'
                placeholder='Amount in USD'
              />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
              <Button color='primary' type='submit'>
                Fund!
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Card className='orgList w-full  p-5 rounded-md gap-5 flex flex-col'>
        <CardHeader>
          <h2 className='text-black'>Organization list</h2>
        </CardHeader>

        <Divider />
        <div className='w-full grid overflow-y-scroll gap-5 lg:grid-cols-2 p-2 rounded-md max-h-64'>
          {orgs.map((org, index) => (
            <Card key={index}>
              <CardHeader>{org.name}</CardHeader>
              <Divider />
              <CardBody className='gap-2'>
                <p>{org.description}</p>
                <Button onPress={onOpen}>Fund!</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </Card>
    </>
  )
}

export default OrgListPanel
