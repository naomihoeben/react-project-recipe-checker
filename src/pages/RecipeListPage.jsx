import { useState } from 'react';
import { Box, Heading, Input, Center, Flex, Stack, Image, Text } from '@chakra-ui/react';
import { data } from '../utils/data';
import { RecipeItemPage } from './RecipeItemPage';
import { DietLabels } from '../components/DietLabels';
import { Cautions } from '../components/Cautions';
import { DishTypes } from '../components/DishTypes';
import { HealthLabelsList } from '../components/HealthLabelsList';

export const RecipeListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedRecipe) {
    return (
      <RecipeItemPage
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }

  return (
    <Box bg="seagreen" minHeight="100vh" px={{ base: 4, md: 8 }} py={8}>
      <Center flexDir="column" mb={6}>
        <Heading as="h1" size="lg" color="white">
          Recipe Checker
        </Heading>
        <Input
          placeholder="Search recipes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="whitesmoke"
          color="gray.700"
          _placeholder={{ color: 'gray.500' }}
          width={{ base: '100%', md: '50%' }}
          mt={4}
        />
      </Center>
      <Center>
        <Flex wrap="wrap" justify="center" gap={4} maxWidth="1200px">
          {filteredRecipes.map((hit) => {
            const { label, image, dietLabels, cautions, mealType, dishType, healthLabels } = hit.recipe;
            return (
              <Box
                key={label}
                bg="whitesmoke"
                borderRadius="md"
                boxShadow="md"
                overflow="hidden"
                onClick={() => setSelectedRecipe(hit.recipe)}
                cursor="pointer"
                width="280px"
                textAlign="center"
              >
                <Image
                  src={image}
                  alt={label}
                  width="100%"
                  height="150px"
                  objectFit="cover"
                />
                <Stack p={3} spacing={2} align="center">
                  {mealType && (
                    <Text fontSize="xs" textTransform="uppercase" color="gray.500" fontWeight="bold">
                      {mealType.join(', ')}
                    </Text>
                  )}
                  <Text fontWeight="bold" fontSize="lg">
                    {label}
                  </Text>
                  {healthLabels && (
                    <HealthLabelsList
                      healthLabels={healthLabels.filter((label) =>
                        ['Vegan', 'Vegetarian', 'Pescetarian'].includes(label)
                      )}
                    />
                  )}
                  {dietLabels && <DietLabels dietLabels={dietLabels} />}
                  {dishType && (
                    <Center>
                      <Text fontWeight="bold" mr={1}>
                        Dish:
                      </Text>
                      <DishTypes dishType={dishType} />
                    </Center>
                  )}
                  {cautions && (
                    <Center flexDirection="column">
                      <Text fontWeight="bold">Cautions:</Text>
                      <Cautions cautions={cautions} />
                    </Center>
                  )}
                </Stack>
              </Box>
            );
          })}
        </Flex>
      </Center>
    </Box>
  );
};
