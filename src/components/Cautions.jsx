import { Wrap, WrapItem, Badge } from '@chakra-ui/react';

export const Cautions = ({ cautions }) => {
  if (!cautions || cautions.length === 0) return null;

  return (
    <Wrap spacing={2} marginY={2}>
      {cautions.map((caution) => (
        <WrapItem key={caution}>
          <Badge colorScheme="red" textTransform="uppercase">
            {caution}
          </Badge>
        </WrapItem>
      ))}
    </Wrap>
  );
};
