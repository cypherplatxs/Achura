import { keyStores, KeyPair, connect } from "near-api-js"

const keyStore = new keyStores.InMemoryKeyStore();

const keyPair = KeyPair.fromString(process.env.NEAR_KEY ?? "NO KEY");

keyStore.setKey("testnet", "example-account.testnet", keyPair).then(() => {
    console.log("✅ near key was set");

});

const connectionConfig = {
    networkId: "testnet",
    keyStore: keyStore,
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
};
let nearConnection: any = null;

const connectNear = async () => {
    nearConnection = await connect(connectionConfig)
}

export const getAccountBalance = async (accountId: string) => {
    try {
        if (!nearConnection) {
            await connectNear()
        }

        const account = await nearConnection.account(accountId);
        const balance = await account.getAccountBalance();
        console.log(balance);

        return balance.available;
    } catch (error) {
        console.log(error);

    }

}