import { Input } from '@chakra-ui/react';

export const SearchFunction = ({ searchTerm, setSearchTerm, placeholder = "Search..." }) => {
  return (
    <Input
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      width="300px"
      mt={4}
    />
  );
};
