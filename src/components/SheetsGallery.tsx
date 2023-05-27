import { Flex } from '@chakra-ui/react';
import { Sheet } from './Sheet';
import { PDFReader } from './PDFReader';

export const SheetsGallery = () => {
	return (
		<Flex width={'100%'} overflowX={'hidden'} justifyContent={'space-evenly'} paddingY={10}>
			<Sheet />
			<PDFReader />
		</Flex>
	);
};
