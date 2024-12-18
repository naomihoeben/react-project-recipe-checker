import { UnorderedList, ListItem } from '@chakra-ui/react';

export const TotalNutrients = ({ totalNutrients }) => {
  if (!totalNutrients) return null;

  return (
    <>
      <UnorderedList pl={5}>
        {totalNutrients.ENERC_KCAL && (
          <ListItem>
            Energy: {totalNutrients.ENERC_KCAL.quantity.toFixed(1)} kcal
          </ListItem>
        )}
        {totalNutrients.PROCNT && (
          <ListItem>
            Protein: {totalNutrients.PROCNT.quantity.toFixed(1)} g
          </ListItem>
        )}
        {totalNutrients.FAT && (
          <ListItem>
            Fat: {totalNutrients.FAT.quantity.toFixed(1)} g
          </ListItem>
        )}
        {totalNutrients.CHOCDF && (
          <ListItem>
            Carbs: {totalNutrients.CHOCDF.quantity.toFixed(1)} g
          </ListItem>
        )}
        {totalNutrients.CHOLE && (
          <ListItem>
            Cholesterol: {totalNutrients.CHOLE.quantity.toFixed(1)} mg
          </ListItem>
        )}
        {totalNutrients.NA && (
          <ListItem>
            Sodium: {totalNutrients.NA.quantity.toFixed(1)} mg
          </ListItem>
        )}
      </UnorderedList>
    </>
  );
};
