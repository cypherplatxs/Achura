use near_sdk::{env, near_bindgen, AccountId, Balance, Promise, Timestamp};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LookupMap;
use near_sdk::serde::Serialize;
use schemars::JsonSchema;

// Definición de la estructura de datos para rastrear transacciones
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
    pub fn transfer(&mut self, beneficiary_to_send: AccountId, amount_to_send: u128) {
        let amount: u128 = amount_to_send;
        let sender: AccountId = env::predecessor_account_id();
		let timestamp: Timestamp = env::block_timestamp();
		let balance: Balance = env::account_balance();
		let sender_clone: AccountId = sender.clone();
        let beneficiary: AccountId = beneficiary_to_send;
        let beneficiary_clone: AccountId = beneficiary.clone();

        // Validación: Verificar al sender y los fondos
        if sender != env::predecessor_account_id() {
            env::panic_str("Solo el propietario de los fondos puede realizar una transferencia.");
        } else if balance < amount {
                env::panic_str("Saldo insuficiente para realizar la transferencia.")
            } else {
                    self.transfer(beneficiary, amount)
                }

        let transaction = Transaction {
            sender,
            beneficiary: beneficiary_clone,
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

        // Calcula el total de los fondos disponibles para retirar
		let total_amount: Balance = sender_transactions.iter()
        .map(|t| Into::<Balance>::into(t.amount)).sum();

        if total_amount > 0 {
            self.transactions.remove(&sender);
            Promise::new(sender.clone()).transfer(total_amount)
        } else {
            env::panic_str("No hay fondos disponibles para retirar.");
        }
    }

    // Función para obtener todas las transacciones de una cuenta ID
    pub fn get_transaction_history(&self, account_id: AccountId) -> Vec<Transaction> {
        self.transactions.get(&account_id).unwrap_or_default()
    }
}