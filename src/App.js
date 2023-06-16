import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./Components/views/ApplicationViews";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Navbar />
            <ApplicationViews />
          </>
        }
      />
    </Routes>
  );
}

export default App;
