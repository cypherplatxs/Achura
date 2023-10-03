import { WalletContextType } from "@/types/index";
import { createContext } from "react";

const WalletContext = createContext<WalletContextType | null>(null);
export default WalletContext