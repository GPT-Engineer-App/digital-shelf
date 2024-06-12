import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone with a sleek design.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", description: "A powerful laptop for all your computing needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones for an immersive experience.", image: "/images/headphones.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Image src={product.image} alt={product.name} />
        <Text fontWeight="bold" fontSize="2xl">
          {product.name}
        </Text>
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Button colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;