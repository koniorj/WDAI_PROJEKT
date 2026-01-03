// // raczej useless

// import { Card, CardContent, Typography, Box, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//         "&:hover": { boxShadow: 6 },
//       }}
//     >
//       <Link
//         to={`/product/${product.id}`}
//         style={{
//           textDecoration: "none",
//           color: "inherit",
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Box
//           sx={{
//             height: 150,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             p: 2,
//             bgcolor: "#f5f5f5",
//           }}
//         >
//           <img
//             src={product.image}
//             alt={product.title}
//             style={{
//               maxHeight: "100%",
//               maxWidth: "100%",
//               objectFit: "contain",
//             }}
//           />
//         </Box>
//         <CardContent
//           sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
//         >
//           <Typography variant="body1" fontWeight="bold">
//             {product.title.length > 25
//               ? product.title.substring(0, 25) + "..."
//               : product.title}
//           </Typography>
//           <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
//             {product.description.substring(0, 50)}...
//           </Typography>
//           <Typography
//             sx={{ color: "#2771a7ff", fontWeight: "bold", mt: "auto", pt: 2 }}
//           >
//             ${product.price}
//           </Typography>
//         </CardContent>
//       </Link>
//       <Button
//         onClick={() => addToCart(product)}
//         variant="contained"
//         sx={{ m: 1, bgcolor: "#316E9A", "&:hover": { bgcolor: "#1a5a8a" } }}
//       >
//         Dodaj
//       </Button>
//     </Card>
//   );
// };

// export default ProductCard;
