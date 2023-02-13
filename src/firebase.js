import { app } from "./firebase-config";
import { getStorage } from "firebase/storage";

import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logout = () => {
  signOut(auth);
};

export { auth, storage, db, logout };
