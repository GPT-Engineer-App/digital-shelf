import { Box, Image, Text, Heading, VStack, Button } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", description: "A high-quality smartphone with a sleek design.", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$799", description: "A powerful laptop for all your computing needs.", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones for an immersive experience.", image: "/images/headphones.jpg" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Image src={product.image} alt={product.name} />
        <Heading as="h2" size="xl">{product.name}</Heading>
        <Text fontSize="lg">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button as={Link} to="/products" colorScheme="teal">Back to Products</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;