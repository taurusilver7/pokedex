import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth, usersRef, db } from "../utils/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useAppDispatch } from "../app/hooks";
import { setUserStatus } from "../app/slices/AppSlice";

const Login = () => {
	const dispatch = useAppDispatch();
	
	const handleLogin = async () => {
		const provider = new GoogleAuthProvider();
		const {
			user: { email, uid },
		} = await signInWithPopup(firebaseAuth, provider);

		if (email) {
			const firestoreQuery = query(usersRef, where("uid", "==", uid));
			const fetchedUser = await getDocs(firestoreQuery);

			if (fetchedUser.docs.length === 0) {
				await addDoc(collection(db, "users"), { uid, email });
			}
			dispatch(setUserStatus({ email }));
		}
	};
	return (
		<div className="login">
			<button onClick={handleLogin} className="login-btn">
				<FcGoogle /> Login with google
			</button>
		</div>
	);
};

export default Login;
