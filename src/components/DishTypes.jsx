import { Flex, Badge } from '@chakra-ui/react';

export const DishTypes = ({ dishType }) => {
  if (!dishType || dishType.length === 0) return null;

  return (
    <Flex wrap="wrap" gap={2}>
      {dishType.map((type) => (
        <Badge key={type} textTransform="capitalize">
          {type}
        </Badge>
      ))}
    </Flex>
  );
};
