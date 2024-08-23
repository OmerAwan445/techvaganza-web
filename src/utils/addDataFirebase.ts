import { FirebaseError } from "@/errors/FirebaseError";
import { addDoc, collection, DocumentData, getFirestore, PartialWithFieldValue } from "firebase/firestore";
import firebase_app from "../lib/firebaseConfig";

const db = getFirestore(firebase_app);

export default async function addData<T extends PartialWithFieldValue<DocumentData>>(collectionName: string, data: T): Promise<void> {
    try {
        await addDoc(collection(db, collectionName), data);
    } catch (e: any) {
        throw new FirebaseError(`Failed to add document to ${collectionName}: ${e.message}`);
    }
}