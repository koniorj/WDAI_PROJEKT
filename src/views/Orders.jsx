import { Container, Typography, Card, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Orders = () => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const userOrders = orders.filter((order) => order.userId === user.id);

  return (
    <Container sx={{ pt: 12 }}>
      <Typography variant="h4" gutterBottom>
        Historia zakupów
      </Typography>

      {userOrders.length === 0 && <Typography>Brak zamówień</Typography>}

      {userOrders.map((order) => (
        <Card key={order.id} sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6">Zamówienie #{order.id}</Typography>
          <Typography variant="body2">Data: {order.date}</Typography>

          <Box sx={{ mt: 2 }}>
            {order.items.map((item, idx) => (
              <Typography key={idx}>
                • {item.title} – ${item.price}
              </Typography>
            ))}
          </Box>

          <Typography sx={{ mt: 2 }} fontWeight="bold">
            Suma: ${order.total}
          </Typography>
        </Card>
      ))}
    </Container>
  );
};

export default Orders;
