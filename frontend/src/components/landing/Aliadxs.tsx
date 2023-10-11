import React from "react";

export default function Aliadxs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-5xl font-semibold leading-8 text-gray-900">
          Ecosistema
        </h2>
        <div className="flex gap-3 max-w-[300px] text-withe mr-2 ml-2 pt-20 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="text-center"> {/* Aplica text-center al contenedor de cada imagen */}
            <img
              className="max-h-12 w-full object-contain"
              src="https://cryptologos.cc/logos/near-protocol-near-logo.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="text-center"> {/* Aplica text-center al contenedor de cada imagen */}
            <img
              className="max-h-12 w-full object-contain"
              src="https://encodeclub.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd0c8094a-e610-4814-9977-ce61e347ef5a%2F8eb7cfc7-0d74-47f6-861d-2b02b6af9621%2Fsymbol-1.png?table=block&id=bf7c722c-b847-4945-a333-90447cd9a5ad&spaceId=d0c8094a-e610-4814-9977-ce61e347ef5a&width=600&userId=&cache=v2"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
     
          <div className="text-center"> {/* Aplica text-center al contenedor de cada imagen */}
            <img
              className="max-h-12 w-full object-contain"
              src="https://seeklogo.com/images/M/mintbase-nft-contract-logo-5CC9735092-seeklogo.com.png"
              alt="Reform"
              width={458}
              height={48}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
