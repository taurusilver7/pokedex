import { Background, Loader } from "./components";
import "./scss/index.scss";
import { Footer, Navbar } from "./sections";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect, lazy, Suspense } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearToast, setUserStatus } from "./app/slices/AppSlice";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/firebase";

const Search = lazy(() => import("./pages/Search"));
const Compare = lazy(() => import("./pages/Compare"));
const MyList = lazy(() => import("./pages/MyList"));
const Pokemon = lazy(() => import("./pages/Pokemon"));

function App() {
	const { toasts } = useAppSelector(({ app }) => app);
	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (currentUser) => {
			if (currentUser) {
				dispatch(setUserStatus({ email: currentUser.email as string }));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		if (toasts.length) {
			const toastOptions: ToastOptions = {
				position: "top-right",
				autoClose: 2000,
				pauseOnHover: true,
				draggable: false,
				// hideProgressBar: true,
				type: "info",
				theme: "dark",
			};
			toasts.forEach((message: string) => {
				toast(message, toastOptions);
			});
			dispatch(clearToast());
		}
	}, [toasts, dispatch]);

	return (
		<div className="main-container">
			<Background />
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<div className="app">
						<Navbar />
						<Routes>
							<Route path="/search" element={<Search />} />
							<Route path="/list" element={<MyList />} />
							<Route path="/compare" element={<Compare />} />
							<Route path="/pokemon/:id" element={<Pokemon />} />
							<Route element={<Navigate to="/pokemon/1" />} path="*" />
						</Routes>
						<Footer />
						<ToastContainer />
					</div>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
