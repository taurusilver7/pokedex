import { Background } from "./components";
import "./scss/index.scss";
import { Footer, Navbar } from "./sections";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Compare, MyList, Pokemon, Search } from "./pages";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearToast } from "./app/slices/AppSlice";

function App() {
	const { toasts } = useAppSelector(({ app }) => app);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (toasts.length) {
			const toastOptions: ToastOptions = {
				position: "top-right",
				autoClose: 2000,
				pauseOnHover: true,
				draggable: false,
				hideProgressBar: true,
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
			</BrowserRouter>
		</div>
	);
}

export default App;
