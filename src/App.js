import { auth } from "./firebase/firebase";

function App() {
  console.log("Firebase Auth:", auth);
  return <h1>Firebase Connected 🎉</h1>;
}

export default App;
