import { Wrap, WrapItem, Badge } from '@chakra-ui/react';

export const DietLabels = ({ dietLabels }) => {
  if (!dietLabels || dietLabels.length === 0) return null;

  return (
    <Wrap spacing={2} marginY={2}>
      {dietLabels.map((label) => (
        <WrapItem key={label}>
          <Badge colorScheme="green" textTransform="uppercase">
            {label}
          </Badge>
        </WrapItem>
      ))}
    </Wrap>
  );
};
