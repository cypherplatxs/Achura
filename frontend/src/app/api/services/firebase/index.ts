// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { FIREBASE_CONFIG } from "../config"
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { User, UserType } from "@/types";

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

export async function addData(collection: string, id: string, data: User) {
    await setDoc(doc(db, collection, id), data, {
        merge: true,
    });
}

export async function geItem(collection: string, id: string,) {
    let res = await getDoc(doc(db, collection, id))
    console.log(id);
    return res.data()
}

export async function getOrgs(collectionId: string) {

    const q = query(collection(db, collectionId), where("type", "==", UserType.organization));

    const res = await getDocs(q);
    return res.docs.map((doc) => doc.data());
}