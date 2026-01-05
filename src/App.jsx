import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import Cart from "./views/Cart";
import Login from "./views/Login";
import Orders from "./views/Orders";
import OrderDetails from "./views/OrderDetails";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Montserrat', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
    h6: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
    body1: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
    body2: { fontFamily: "'Montserrat', sans-serif", fontWeight: 700 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container sx={{ mt: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:orderId" element={<OrderDetails />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
