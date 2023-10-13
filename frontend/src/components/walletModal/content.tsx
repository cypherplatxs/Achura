import React, { Fragment, useCallback, useEffect, useState } from "react";
import { providers, utils } from "near-api-js";
import type {
  AccountView,
  CodeResult,
} from "near-api-js/lib/providers/provider";
import type { Transaction } from "@near-wallet-selector/core";
// @ts-expect-error
import BN from 'bn.js'

import type { Account, Message } from "./interfaces";
import { useWalletSelector } from "@/context/wallectSelectorContext";
import SignIn from "./sigin";
import Form from "./form";
import Messages from "./messages";

type Submitted = SubmitEvent & {
  target: { elements: { [key: string]: HTMLInputElement } };
};
const CONTRACT_ID = "juminstock1.testnet";


const SUGGESTED_DONATION = "0";
const BOATLOAD_OF_GAS = utils.format.parseNearAmount("0.00000000003")!;

interface GetAccountBalanceProps {
  provider: providers.Provider;
  accountId: string;
}

// const getAccountBalance = async ({
//   provider,
//   accountId,
// }: GetAccountBalanceProps) => {
//   try {
//     const { amount } = await provider.query<AccountView>({
//       request_type: "view_account",
//       finality: "final",
//       account_id: accountId,
//     });
//     const bn = new BN(amount);
//     return { hasBalance: !bn.isZero() };
//   } catch {
//     return { hasBalance: false };
//   }
// };

const Content: React.FC = () => {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const [account, setAccount] = useState<Account | null>(null);
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAccount = useCallback(async (): Promise<Account | null> => {
    if (!accountId) {
      return null;
    }

    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    // const { hasBalance } = await getAccountBalance({
    //   provider,
    //   accountId,
    // });

    // if (!hasBalance) {
    //   window.alert(
    //     `Account ID: ${accountId} has not been founded. Please send some NEAR into this account.`
    //   );
    //   const wallet = await selector.wallet();
    //   await wallet.signOut();
    //   return null;
    // }

    return provider
      .query<AccountView>({
        request_type: "view_account",
        finality: "final",
        account_id: accountId,
      })
      .then((data) => ({
        ...data,
        account_id: accountId,
      }));
  }, [accountId, selector.options]);

  const getMessages = useCallback(() => {
    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    return provider
      .query<CodeResult>({
        request_type: "call_function",
        account_id: CONTRACT_ID,
        method_name: "getMessages",
        args_base64: "",
        finality: "optimistic",
      })
      .then((res) => JSON.parse(Buffer.from(res.result).toString()));
  }, [selector]);

  // useEffect(() => {
  //   // TODO: don't just fetch once; subscribe!
  //   getMessages().then(setMessages);
  // }, []);

  // useEffect(() => {
  //   if (!accountId) {
  //     return setAccount(null);
  //   }

  //   setLoading(true);

  //   getAccount().then((nextAccount) => {
  //     setAccount(nextAccount);
  //     setLoading(false);
  //   });
  // }, [accountId, getAccount]);

  const handleSignIn = () => {
    modal.show();
  };

  const handleSignOut = async () => {
    const wallet = await selector.wallet();

    wallet.signOut().catch((err) => {
      console.log("Failed to sign out");
      console.error(err);
    });
  };


  if (loading) {
    return null;
  }

  if (!account) {
    return (
      <Fragment>
        <div>
          <button onClick={handleSignIn}>Log in</button>
        </div>
        <SignIn />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <button onClick={handleSignOut}>Log out</button>
    </Fragment>
  );
};

export default Content;