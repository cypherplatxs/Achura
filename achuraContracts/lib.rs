use near_sdk::{env, near_bindgen, AccountId, Balance, Promise, Timestamp};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LookupMap;
use near_sdk::serde::Serialize;
use schemars::JsonSchema;

// Definición: Estructura de datos para crear transacciones
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Serialize, JsonSchema)]
#[serde(crate = "near_sdk::serde")]
pub struct Transaction {
    sender: AccountId,
    beneficiary: AccountId,
    amount: u128,
	timestamp: Timestamp,
	balance: Balance,
    // hash: String
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
    pub fn transfer(&mut self, beneficiary_to_send: AccountId, amount_to_send: u128) {
        let amount: u128 = amount_to_send;
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
    pub fn withdraw(&mut self) -> Promise {
        let sender = env::predecessor_account_id();
        let amount: u128 = env::account_balance();
        let balance: Balance = env::account_balance();
		let timestamp: Timestamp = env::block_timestamp();
		let sender_clone: AccountId = sender.clone();
        let sender_clone2: AccountId = sender.clone();
        let sender_transactions = self.transactions.get(&sender).unwrap_or_default();

        // Calcula: Fondos disponibles para retirar
		let total_amount: Balance = sender_transactions.iter()
        .map(|t| Into::<Balance>::into(t.amount)).sum();

        // Calcula: Saldo para retirar
        if total_amount > 0 {
            let transfer_promise = Promise::new(sender).transfer(total_amount);

            let transaction = Transaction {
                sender: sender_clone2,
                beneficiary: env::signer_account_id(),
                amount,
                timestamp,
                balance
            };
    
        let mut sender_transactions = self.transactions.get(&sender_clone).unwrap_or_default();
        sender_transactions.push(transaction);
    
        self.transactions.insert(&sender_clone, &sender_transactions);

        return transfer_promise;
        } else {
            env::panic_str("No hay fondos disponibles para retirar.");
        };
    }

    // Función: Admite el depósito de fondos
    #[payable]
    pub fn receive_funds(&mut self, beneficiary_to_send: AccountId) {
        let sender = env::predecessor_account_id();
		let timestamp: Timestamp = env::block_timestamp();
		let sender_clone: AccountId = sender.clone();
        
        // Actualiza: Balance de las cuentas
        let current_balance = env::account_balance();
        let attached_deposit = env::attached_deposit();
        let new_balance = current_balance + attached_deposit;
        env::log_str(format!("Nuevo balance: {} tokens", new_balance).as_str());

        let transaction = Transaction {
            sender: sender_clone,
            beneficiary: beneficiary_to_send,
            amount: attached_deposit,
            timestamp,
            balance: current_balance
        };

        let mut sender_transactions = self.transactions.get(&sender).unwrap_or_default();
        sender_transactions.push(transaction);

        self.transactions.insert(&sender, &sender_transactions);

    }

    // Función: Obtiene todas las transacciones de una cuenta ID
    pub fn get_transaction_history(&self, account_id: AccountId) -> Vec<Transaction> {
        self.transactions.get(&account_id).unwrap_or_default()
    }
}