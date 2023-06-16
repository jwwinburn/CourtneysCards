import { Outlet, Route, Routes, Link } from "react-router-dom";
import { Home } from "../home/Home";
import { SpecialOccasions } from "../specialOccasions/SpecialOccasions";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="occasions" element={<SpecialOccasions />} />
        {/* <Route path="holiday" element={<Holidays />} />
        <Route path="justBecause" element={<JustBecause />} />
        <Route path="misc" element={<Misc />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="shoppingcart" element={<ShoppingCart />} /> */}
      </Route>
    </Routes>
  );
};
