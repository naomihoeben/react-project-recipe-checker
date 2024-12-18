import { Wrap, WrapItem, Badge } from '@chakra-ui/react';

export const HealthLabelsList = ({ healthLabels }) => {
  if (!healthLabels || healthLabels.length === 0) return null;

  return (
    <Wrap spacing={2} marginY={2}>
      {healthLabels.map((label) => (
        <WrapItem key={label}>
          <Badge colorScheme="purple" textTransform="uppercase">
            {label}
          </Badge>
        </WrapItem>
      ))}
    </Wrap>
  );
};
