import firebase_app from "../lib/firebaseConfig";
import { getFirestore, doc, setDoc, DocumentData, PartialWithFieldValue, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData<T extends PartialWithFieldValue<DocumentData>>(colllection: string, id: string, data: T) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e:any) {
        error = e;
    }

    return { result, error };
}

export async function getDoument(collection: any, id: any) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}