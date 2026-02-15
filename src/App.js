import { auth } from "./firebase/firebase";
import RecruiterDashboard from "./pages/RecruiterDashboard";

function App() {
  console.log("Firebase Auth:", auth);

  return (
    <div>
      <h1>Firebase Connected 🎉</h1>
      <RecruiterDashboard />
    </div>
  );
}

export default App;
