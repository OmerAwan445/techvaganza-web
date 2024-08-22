import { addDoc, collection, DocumentData, getFirestore, PartialWithFieldValue } from "firebase/firestore";
import firebase_app from "../lib/firebaseConfig";

const db = getFirestore(firebase_app);

export default async function addData<T extends PartialWithFieldValue<DocumentData>>(colllectionName: string, data: T) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, colllectionName), data);
    } catch (e:any) {
        error = e;
    }

    return { result, error };
}