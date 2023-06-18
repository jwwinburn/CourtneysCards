import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./Components/views/ApplicationViews";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Navbar />
            <ApplicationViews />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
