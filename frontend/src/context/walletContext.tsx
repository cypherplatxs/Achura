import { WalletContextType } from "@/types/index.types";
import { createContext } from "react";

const WalletContext = createContext<WalletContextType | null>(null);
export default WalletContext