use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen, AccountId, Balance, Timestamp, Promise, PromiseResult, Gas};
// use near_sdk::collections::UnorderedMap;
use near_sdk::serde::Serialize;

// Definición de la estructura de datos para rastrear depósitos y retiros
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Transaction {
  sender: AccountId,
  balance: Balance,
  timestamp: Timestamp,
  amount: u128,
  beneficiary: AccountId,
  // transaction_ix: i64
}

// Definición de la estructura para el rastreo de transacciones
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct Transactions {
    transactions: Vec<Transaction>
}

// Función para definir el estado inicial del contrato
impl Default for Transaction {
    fn default() -> Self {
      Self {
        sender: env::current_account_id(),
        balance: env::account_balance(),
        timestamp: env::block_timestamp(),
        amount: Default::default(),
        beneficiary: "v1.faucet.nonofficial.testnet".parse().unwrap()
      }
    }
  }

#[near_bindgen]
impl Transaction {
    // Función para realizar una transferencia
    #[payable]
    pub fn transferal(&mut self, account_beneficiary: AccountId, amount_to_send: u128) {
        self.sender = env::predecessor_account_id();
        self.beneficiary = account_beneficiary;
        self.amount = amount_to_send;

        // Se crea una instancia de la estructura "Transaction"
        let transaction = Transaction {
            sender: self.sender.clone(),
            balance: self.balance,
            timestamp: self.timestamp,
            amount: self.amount,
            beneficiary: self.beneficiary.clone()
        };

        // Se crea una instancia de la estructura "Transactions"
        let mut transactions = Transactions {
            transactions: Vec::new(),
        };

        // Se agrega la instancia de "transaction"
        transactions.transactions.push(transaction);
    }

    // Función para realizar un retiro
    #[payable]
    pub fn withdraw(&mut self) -> Promise {
        let attached_amount = env::attached_deposit();
        let sender = env::predecessor_account_id();

        let callback_id: AccountId;
        let method_name = "on_withdraw_done".to_string();
        let input: Vec<u8> = vec![];
        let gas: u128 = 30_000_000_000;
        let attached_near: Gas = near_sdk::Gas(30_000_000_000);

        let callback: Promise = env::promise_create(
            callback_id, &method_name, &input, gas, attached_near);

        Promise::new(sender.clone()).transfer(attached_amount).then(callback)
    }

    pub fn on_withdraw_done(&mut self) -> Promise {
        match env::promise_result(0) {
            PromiseResult::Successful(_) => {
                // The transfer was successful...
            }
            _ => {
                // Handle an unsuccessful transfer...
            }
        }

        Promise::new(env::current_account_id())
    }
}


//     // Función para obtener el historial de transacciones
//     // pub fn get_transaction_history(&self) -> Vec<Transaction> {
//     //     self.transactions.clone()
//     // }
// }
