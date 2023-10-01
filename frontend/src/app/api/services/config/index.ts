export const FIREBASE_CONFIG = {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY ?? "missing val for FIREBASE_API_KEY",
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN ?? "missing val for FIREBASE_AUTH_DOMAIN",
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID ?? "missing val for FIREBASE_PROJECT_ID",
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET ?? "missing val for FIREBASE_STORAGE_BUCKET",
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID ?? "missing val for FIREBASE_MESSAGING_SENDER_ID",
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID ?? "missing val for FIREBASE_APP_ID",
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID ?? "missing val for FIREBASE_MEASUREMENT_ID"
}