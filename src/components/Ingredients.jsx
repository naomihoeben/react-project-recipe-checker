import { Box, Text } from "@chakra-ui/react";

export const Ingredients = ({ ingredients }) => {
	if (!ingredients || ingredients.length === 0) return null;

	return (
		<Box mt={4}>
			{ingredients.map((ingredient, index) => (
				<Text key={index} mb={1}>
					{ingredient.text}
				</Text>
			))}
		</Box>
	);
};
