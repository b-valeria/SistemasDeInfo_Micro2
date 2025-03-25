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

export async function crearReserva(destino) {
  await addDoc(collection(db, "reservas"), destino);
}

export async function obtenerReservas() {
  const querySnapshot = await getDocs(collection(db, "reservas"));
    const destinos = [] 
    querySnapshot.forEach((doc) => {
    destinos.push({ id: doc.id, ...doc.data() }) ;
  });

  return destinos
}

export async function obtenerReservaPorID(id) {
    const docRef = doc(db, "reservas", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
        return docSnap.data()
    }
    else {throw Error("No se encontro el documento")}
}
