import { Outlet, Route, Routes, Link } from "react-router-dom"


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
                <Route path="holidays" element={<Holidays />} />
                <Route path="justbecause" element={<JustBecause />} />
                <Route path="misc" element={<Misc />} />
                <Route path="myaccount" element={<MyAccount />} />
                <Route path="shoppingcart" element={<ShoppingCart />} />
            </Route>
        </Routes>
    );
}

