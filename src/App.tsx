import { Background } from "./components";
import "./scss/index.scss";
import { Footer, Navbar, Wrapper } from "./sections";

function App() {
	return (
		<div className="main-container">
			<Background />

			<div className="app">
				<Navbar />
				<Wrapper />
				<Footer />
			</div>
		</div>
	);
}

export default App;
