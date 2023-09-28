import { Organization } from '@/types/index.types';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import React from 'react';

function OrgListPanel({ orgs }: { orgs: Organization[] }) {
  return (
    <div className='w-full p-10 rounded-md gap-2 flex flex-col'>
      {orgs.map((org, index) => (
        <Card key={index}>
          <CardHeader>{org.name}</CardHeader>
          <Divider/>
          <CardBody>
            {org.description}
            <Button>Fund!</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default OrgListPanel;
