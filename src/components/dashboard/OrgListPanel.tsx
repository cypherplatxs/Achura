import { Organization } from '@/types/index.types';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import React from 'react';

function OrgListPanel({ orgs }: { orgs: Organization[] }) {
  return (
    <div className='orgList w-full p-5 rounded-md gap-5 flex flex-col bg-content1'>
      <h2 className='text-black'>Organization list</h2>
      <Divider />
      <div className='w-full grid overflow-y-scroll gap-5 lg:grid-cols-2 p-2 rounded-md max-h-64' >
      {orgs.map((org, index) => (
        <Card key={index}>
          <CardHeader>{org.name}</CardHeader>
          <Divider />
          <CardBody className='gap-2'>
            <p>{org.description}</p>
            <Button>Fund!</Button>
          </CardBody>
        </Card>
      ))}
      </div>
    </div>
  );
}

export default OrgListPanel;
