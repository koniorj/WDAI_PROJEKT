import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from "@mui/material";
import { ShoppingCart, Login, History, Home } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#316E9A" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Nasz Sklep
        </Typography>

        <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
          Sklep
        </Button>

        {isLoggedIn && (
          <Button
            color="inherit"
            component={Link}
            to="/orders"
            startIcon={<History />}
          >
            Historia
          </Button>
        )}

        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        {isLoggedIn ? (
          <Button color="inherit" onClick={handleLogout}>
            Wyloguj
          </Button>
        ) : (
          <Button
            color="inherit"
            component={Link}
            to="/login"
            startIcon={<Login />}
          >
            Zaloguj
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
