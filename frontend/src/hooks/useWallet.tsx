import { useWalletSelector } from '@/context/wallectSelectorContext'

/**
 * Hook for interacting with a digital wallet.
 *
 * This hook provides methods for signing in and out of a digital wallet,
 * as well as accessing the currently selected accounts and account ID.
 *
 * @returns {Object} An object containing:
 *  - openWalletModal: A function to open the wallet selection modal.
 *  - disconnectWallet: A function to disconnect the current wallet.
 *  - accounts: An array of available accounts in the wallet.
 *  - accountId: The ID of the currently selected account.
 */

function useWallet () {
  const { selector, modal, accounts, accountId } = useWalletSelector()

  const handleSignIn = () => {
    modal.show()
  }

  const handleSignOut = async () => {
    const wallet = await selector.wallet()

    wallet.signOut().catch(err => {
      console.log('Failed to sign out')
      console.error(err)
    })
  }

  return { openWalletModal : handleSignIn, disconnectWallet : handleSignOut, accounts, accountId }
}

export default useWallet
