use near_sdk::{env, near_bindgen, AccountId, Balance, Promise, Timestamp};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::{Serialize, Deserialize};
use near_sdk::collections::LookupMap;
use schemars::JsonSchema;

// Definición: Estructura de datos para crear transacciones
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize, JsonSchema)]
#[serde(crate = "near_sdk::serde")]
pub struct Transaction {
    sender: AccountId,
    beneficiary: AccountId,
    amount: u128,
	timestamp: Timestamp,
	balance: Balance
}

// Definición: Estructura de datos para el rastreo de transacciones
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

    // Función: Emite transferencias
    #[payable]
    pub fn transfer(&mut self, beneficiary_to_send: AccountId) {
        let amount: u128 = env::attached_deposit();
        let sender: AccountId = env::predecessor_account_id();
        let balance: Balance = env::account_balance();
		let timestamp: Timestamp = env::block_timestamp();
        let beneficiary: AccountId = beneficiary_to_send;
		let sender_clone: AccountId = sender.clone();

        // Validación: Verifica al sender y sus fondos
        if sender != env::predecessor_account_id() {
            env::panic_str("Solo el propietario de los fondos puede realizar una transferencia.");
        } else if balance < amount {
                env::panic_str("Saldo insuficiente para realizar la transferencia.")
            }

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

    // Función: Realiza retiros si se tiene saldo
    pub fn withdraw(&mut self, beneficiary_to_send: AccountId) -> Promise {
        let sender = env::predecessor_account_id();
        let amount: u128 = env::attached_deposit();
        let balance: Balance = env::account_balance();
		let timestamp: Timestamp = env::block_timestamp();
		let sender_clone: AccountId = sender.clone();
        let sender_clone2: AccountId = sender.clone();
        let beneficiary = beneficiary_to_send;
        let sender_transactions = self.transactions.get(&sender).unwrap_or_default();

        // Calcula: Fondos disponibles para retirar
		let total_amount: Balance = sender_transactions.iter()
        .map(|t| Into::<Balance>::into(t.amount)).sum();

        // Calcula: Saldo para retirar
        if total_amount > 0 {
            let transfer_promise = Promise::new(sender).transfer(amount);

            let transaction = Transaction {
                sender: sender_clone2,
                beneficiary,
                amount,
                timestamp,
                balance
            };

            println!("Your total amount is {}", total_amount);
    
            let mut sender_transactions = self.transactions.get(&sender_clone).unwrap_or_default();
            sender_transactions.push(transaction);
    
            self.transactions.insert(&sender_clone, &sender_transactions);

            transfer_promise
        } else {
            env::panic_str("No hay fondos disponibles para retirar.");
        }
    }

    // Función: Obtiene todas las transacciones de una cuenta ID
    pub fn get_transaction_history(&self, account_id: AccountId) -> Vec<Transaction> {
        self.transactions.get(&account_id).unwrap_or_default()
    }
}