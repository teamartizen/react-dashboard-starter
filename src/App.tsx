import { Suspense } from "react";
import "./App.scss";

function App() {
	return <h1>Hello world</h1>;
}

export default function WrappedApp() {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<App />
		</Suspense>
	);
}
