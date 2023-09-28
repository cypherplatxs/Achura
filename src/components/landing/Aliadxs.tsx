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
              src="https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=002"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="text-center"> {/* Aplica text-center al contenedor de cada imagen */}
            <img
              className="max-h-12 w-full object-contain"
              src="https://asset.brandfetch.io/ida1_kkuFW/idgR852F1k.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            
          </div>
          <div className="text-center"> {/* Aplica text-center al contenedor de cada imagen */}
            <img
              className="max-h-12 w-full object-contain"
              src="https://cryptologos.cc/logos/zcash-zec-logo.svg?v=002"
              alt="Reform"
              width={158}
              height={48}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
