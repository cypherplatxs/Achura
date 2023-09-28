
'use client'
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
 
} from "@nextui-org/react";

interface CardProps {
  title: string; // Declara el tipo de 'title' como una cadena (string)
  subtitle: string;
  description: string;
  githubLink: string;
}

function CustomCard({ title, subtitle, description, githubLink }: CardProps) {
  
  return ( 
    <Card className="max-w-[300px] bg-black text-withe mr-2 ml-2">
      <CardHeader className="flex gap-3">
      
        <div className="flex flex-col">
          <p className="text-md ">{title}</p>
          <p className="text-small text-default-500">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href= {githubLink}
        >
          Saber Más
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;