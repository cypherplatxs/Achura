use near_sdk::{env, near_bindgen, AccountId, Balance, BorshStorageKey, Promise, Timestamp};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};

// Definición de la estructura de datos para rastrear depósitos y retiros
#[near_bindgen]
#[derive(Default, BorshStorageKey, BorshSerialize, BorshDeserialize)]
pub struct Transaction {
    sender: AccountId,
    timestamp: Timestamp,
    value: Balance,
    tx_ix: u64,
    beneficiary: AccountId,
    //donations: Mapping<AccountId, u128>
}

// Definición de la estructura para el rastreo de transacciones 
#[near_bindgen]
#[derive(Default, BorshStorageKey, BorshSerialize, BorshDeserialize)]
pub struct ProjectContract {
    transactions: Vec<Transaction>,
}

#[near_bindgen]
impl Transaction {
    // Función para realizar un depósito
    pub fn deposit(&mut self, account_beneficiary: AccountId) {
        let sender = env::predecessor_account_id();
        let timestamp = env::block_timestamp();
        let value = env::attached_deposit();
        let tx_ix = self.transactions.len() as u64;
        let beneficiary = account_beneficiary;

        let transaction = Transaction {
            sender,
            timestamp,
            value,
            tx_ix,
            beneficiary,
        };

        self.transactions.push(transaction);
    }

    // // Función para realizar un retiro
    // pub fn withdraw(&mut self) -> Promise {

    // }

    // Función para obtener el historial de transacciones
    pub fn get_transaction_history(&self) -> Vec<Transaction> {
        self.transactions.clone()
    }
}
