import { CONTRACT_ID } from '@/config'
import { User } from '@/types'
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
import React, { useState } from 'react'

function OrgListPanel ({
  orgs,
  fundOrg,
  accountId
}: {
  orgs: User[]
  fundOrg: any
  accountId: string
}) {
  const [orgData, setOrgData] = useState<User | null>(null)
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    console.debug(  (parseInt(e.target.amount.value)*10**16).toString())
    fundOrg(accountId, e.target.amount.value, orgData?.accountId)
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
                name='amount'
                type='number'
                label='Amount'
                placeholder='Amount in NEAR'
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
              <CardHeader>{org.legalEntityName}</CardHeader>
              <Divider />
              <CardBody className='gap-2'>
                <p>{org.legalDescription}</p>
                <Button
                  onPress={() => {
                    setOrgData(org)
                    onOpen()
                  }}
                >
                  Fund!
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </Card>
    </>
  )
}

export default OrgListPanel
