import { getAuth } from "firebase/auth";
import { firebaseApp } from "@/lib/firebase";

const auth = getAuth(firebaseApp);

export default auth;
