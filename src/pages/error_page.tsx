import { CloseIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
	const error: any = useRouteError();
	console.error(error);

	return (
		// <div id="error-page">
		// 	<h1>Oops!</h1>
		// 	<p>Sorry, an unexpected error has occurred.</p>
		// 	<p>
		// 		<i>{error.statusText || error.message}</i>
		// 	</p>
		// </div>
		<Flex
			width={'100vw'}
			height={'100svh'}
			flexDir={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			textAlign={'center'}
		>
			<Flex flexDir={'column'} alignItems={'center'}>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					bg={'red.500'}
					rounded={'50px'}
					w={'70px'}
					h={'70px'}
					textAlign="center"
				>
					<CloseIcon boxSize={'20px'} color={'white'} />
				</Flex>
				<Heading fontSize={'4rem'} marginBottom={'1rem'}>
					Oops!
				</Heading>
			</Flex>
			<Text
				fontSize={'2rem'}
				fontWeight={300}
				marginBottom={'1rem'}
				color={'gray.500'}
			>
				Sorry, an unexpected error has occurred.
			</Text>
			<Text
				fontSize={'2rem'}
				fontWeight={500}
				color={'teal.500'}
				marginBottom={'1rem'}
			>
				{error.status} {error.statusText || error.message}
			</Text>
			<Link href="/ee09_inf03" textDecoration={'none'} marginBottom={'1rem'}>
				<Button color="white" variant="solid">
					Go to Home
				</Button>
			</Link>
		</Flex>
	);
};
