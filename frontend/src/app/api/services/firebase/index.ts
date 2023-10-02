// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { FIREBASE_CONFIG } from "../config"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: FIREBASE_CONFIG.FIREBASE_API_KEY,
    authDomain: FIREBASE_CONFIG.FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_CONFIG.FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_CONFIG.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_CONFIG.FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_CONFIG.FIREBASE_APP_ID,
    measurementId: FIREBASE_CONFIG.FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp);

export async function addData(collection: string, id: string, data: any) {
    await setDoc(doc(db, collection, id), data, {
        merge: true,
    });
}

// export async function getCollection(collection: string, id: string,) {

//     let result = null;
//     let error = null;

//     try {
//         result = await getDocs(collectio(db, id));
//     } catch (e) {
//         error = e;
//     }

//     return { result, error };
// }
export async function geItem(collection: string, id: string,) {
    let res = await getDoc(doc(db, collection, id))
    console.log(id);

    return res.data()
}