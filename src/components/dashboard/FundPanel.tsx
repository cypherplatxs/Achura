'use client';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React, { useState } from 'react';

function FundPanel() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.debug('Funding!');
    onClose();
  };

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
                <Button color='primary' type='submit' >
                  Fund!
                </Button>
              </ModalFooter>
              </form>
        </ModalContent>
      </Modal>
      <Card className='with_fund'>
        <CardHeader>Fund your account!</CardHeader>
        <Divider />
        <CardBody>
          <Button onPress={onOpen} variant='shadow'>
            Fund!
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default FundPanel;
