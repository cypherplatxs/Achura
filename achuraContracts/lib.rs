use near_sdk::{env, near_bindgen, AccountId, Balance, Promise, Timestamp, CryptoHash};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LookupMap;
use near_sdk::serde::Serialize;
use schemars::JsonSchema;

// #[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone, JsonSchema)]
// Definición de la estructura de datos para rastrear transacciones
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize, JsonSchema)]
#[serde(crate = "near_sdk::serde")]
pub struct Transaction {
    sender: AccountId,
    beneficiary: AccountId,
    amount: u64,
	timestamp: Timestamp,
	balance: Balance
}

// #[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, Clone)]
// #[derive(Default)]
// #[serde(crate = "near_sdk::serde")]
// Definición de la estructura para el rastreo de transacciones
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Transactions {
    transactions: LookupMap<AccountId, Vec<Transaction>>,
}

impl Default for Transactions {
	fn default() -> Self {
	Self::new()
	}
}

#[near_bindgen]
impl Transactions {
    #[init]
    pub fn new() -> Self {
        Self {
            transactions: LookupMap::new(b"t".to_vec()),
        }
    }

    // Función para emitir una transferencia
    #[payable]
    pub fn transfer(&mut self, beneficiary: AccountId, amount_to_send: u64) {
        let amount: u64 = amount_to_send;
        let sender: AccountId = env::predecessor_account_id();
		let timestamp: Timestamp = env::block_timestamp();
		let balance: Balance = env::account_balance();
		let sender_clone = sender.clone();

        let transaction = Transaction {
            sender,
            beneficiary,
            amount,
			timestamp,
			balance
        };

        let mut sender_transactions = self.transactions.get(&sender_clone).unwrap_or_default();
        sender_transactions.push(transaction);

        self.transactions.insert(&sender_clone, &sender_transactions);
    }

    // Función para realizar un retiro si eres el beneficiario
    pub fn withdraw(&mut self) -> Promise {
        let sender = env::predecessor_account_id();
        let sender_transactions = self.transactions.get(&sender).unwrap_or_default();

		let total_amount: Balance = sender_transactions.iter().map(|t| Into::<Balance>::into(t.amount)).sum();
        if total_amount > 0 {
            self.transactions.remove(&sender);
            Promise::new(sender.clone()).transfer(total_amount)
        } else {
            env::panic_str("No funds to withdraw.");
        }
    }

    // Función para obtener todas las transacciones de una cuenta ID
    pub fn get_transaction_history(&self, account_id: AccountId) -> Vec<Transaction> {
        self.transactions.get(&account_id).unwrap_or_default()
    }
}