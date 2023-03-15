import { Background } from "./components";
import "./scss/index.scss";
import { Footer, Navbar, Wrapper } from "./sections";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Compare, MyList, Pokemon, Search } from "./pages";

function App() {
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
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
