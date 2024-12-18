import { Button } from '@chakra-ui/react';

export const BackButton = ({ onBack }) => {
  return (
    <Button
      bg="seagreen"
      color="white"
      _hover={{ bg: "mediumseagreen" }} 
      onClick={onBack}
    >
      Back to List
    </Button>
  );
};
