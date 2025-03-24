import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  getDoc,
} from "firebase/firestore";
import { app } from "../firebase";

const db = getFirestore(app);

export async function crearDestino(destino) {
  await addDoc(collection(db, "destinos"), destino);
}

export async function obtenerDestinos() {
  const querySnapshot = await getDocs(collection(db, "destinos"));
    const destinos = [] 
    querySnapshot.forEach((doc) => {
    destinos.push({ id: doc.id, ...doc.data() }) ;
  });

  return destinos
}

export async function obtenerDestinoPorID(id) {
    const docRef = doc(db, "destinos", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
        return docSnap.data()
    }
    else {throw Error("No se encontro el documento")}
}
