import {
  Box,
  Heading,
  Image,
  Text,
  SimpleGrid,
  ScaleFade,
  Stack,
} from '@chakra-ui/react';
import { BackButton } from '../components/ui/BackButton';
import { Ingredients } from '../components/Ingredients';
import { HealthLabelsList } from '../components/HealthLabelsList';
import { DietLabels } from '../components/DietLabels';
import { Cautions } from '../components/Cautions';
import { TotalNutrients } from '../components/TotalNutrients';

export const RecipeItemPage = ({ recipe, onBack }) => {
  if (!recipe) return <Text>No recipe selected.</Text>;

  const {
    label,
    image,
    mealType,
    totalTime,
    yield: servings,
    ingredients,
    healthLabels,
    dietLabels,
    cautions,
    totalNutrients,
  } = recipe;

  return (
    <ScaleFade initialScale={0.9} in>
      <Box
        bg="seagreen"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={{ base: 0, md: 8 }} // Remove vertical padding on mobile
      >
        <Box
          bg="whitesmoke"
          maxWidth="800px"
          width="100%"
          borderRadius={{ base: 0, md: 'md' }} // Remove border-radius on mobile
          overflow="hidden"
          boxShadow="lg"
        >
          <Box p={4}>
            <BackButton onBack={onBack} />
          </Box>
          <Image src={image} alt={label} width="100%" maxHeight="350px" objectFit="cover" />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} p={8}>
            {/* Left Section */}
            <Stack spacing={4}>
              {mealType && (
                <Text fontSize="xs" textTransform="uppercase" color="gray.500">
                  {mealType.join(', ')}
                </Text>
              )}
              <Heading as="h1" size="lg">
                {label}
              </Heading>
              <Text>
                <strong>Total cooking time:</strong> {totalTime} minutes
              </Text>
              <Text>
                <strong>Servings:</strong> {servings || 'N/A'}
              </Text>
              <Box>
                <Text fontWeight="bold" mb={2}>
                  Ingredients:
                </Text>
                <Ingredients ingredients={ingredients} />
              </Box>
            </Stack>

            {/* Right Section */}
            <Stack spacing={4}>
              {healthLabels && (
                <Box>
                  <Text fontWeight="bold">Health Labels:</Text>
                  <HealthLabelsList healthLabels={healthLabels} />
                </Box>
              )}
              {dietLabels && (
                <Box>
                  <Text fontWeight="bold">Diet:</Text>
                  <DietLabels dietLabels={dietLabels} />
                </Box>
              )}
              {cautions && (
                <Box>
                  <Text fontWeight="bold">Cautions:</Text>
                  <Cautions cautions={cautions} />
                </Box>
              )}
              {totalNutrients && (
                <Box>
                  <Text fontWeight="bold">Total Nutrients:</Text>
                  <TotalNutrients totalNutrients={totalNutrients} />
                </Box>
              )}
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
    </ScaleFade>
  );
};
