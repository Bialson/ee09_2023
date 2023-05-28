import { useContext } from 'react';
import {
	IconButton,
	Box,
	CloseButton,
	Flex,
	Icon,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	BoxProps,
	FlexProps,
	Image,
	ModalFooter,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useColorMode,
} from '@chakra-ui/react';
import {
	BsHouse,
	// BsGear,
	BsCompass,
	BsInfoCircle,
	BsList,
	BsMoonStarsFill,
	BsSun,
} from 'react-icons/bs';
import { IconType } from 'react-icons';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from '../assets/react.svg';
import TS from '../assets/Typescript_logo_2020.svg';
import Logo from '../assets/exam-svgrepo-com.svg';
import { InfoModalProvider } from '../context/InfoModalProvider';
import { InfoModalContext } from '../context/InfoModalContext';
import { SheetsGallery } from '../components/SheetsGallery';

interface LinkItemProps {
	name: string;
	url?: string;
	icon: IconType;
	setOpen?: () => void;
}
const LinkItems: Array<LinkItemProps> = [
	{ name: 'Home', icon: BsHouse, url: '/ee09_inf03/' },
	{ name: 'Sheets', icon: BsCompass },
	// { name: 'Favourites', icon: BsStar },
	{ name: 'About', icon: BsInfoCircle },
	// { name: 'Settings', icon: BsGear },
];

export const Sheets = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<InfoModalProvider>
			<Flex height={'100vh'} width={'100vw'}>
				<Navbar />
				<SheetsGallery />
				<About />
				<Button
					aria-label="Toggle Color Mode"
					onClick={toggleColorMode}
					_focus={{ boxShadow: 'none' }}
					rounded={'full'}
					position={'absolute'}
					bottom={4}
					left={4}
					padding={4}
					fontSize={20}
					width={'fit-content'}
					height={'fit-content'}
				>
					{colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
				</Button>
			</Flex>
		</InfoModalProvider>
	);
};

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			<MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
		</>
	);
};

export const About = () => {
	const { isInfoOpen, setInfoOpen } = useContext(InfoModalContext);
	return (
		<Modal
			onClose={() => setInfoOpen(false)}
			isOpen={isInfoOpen}
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>About</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text
						fontWeight={500}
						fontSize={'1.2rem'}
						color={'purple.400'}
						textAlign={'center'}
					>
						ExamSheets v0.1.0
					</Text>
					<br />
					<Text textAlign={'justify'}>
						App created for students from student programmer, which
						specializes in backend, API interfaces and large
						expandable systems. Page will be successfully updated
						with new solved sheets, with step-by-step procedure.
						Have a nice studying 😁
					</Text>
					<br />
					<Link href="https://github.com/Bialson" isExternal>
						Check my other projects on GitHub{' '}
						<ExternalLinkIcon mx="2px" />
					</Link>
					<br />
					<br />
					<Text
						textAlign={'center'}
						fontWeight={500}
						marginBottom={4}
					>
						Created with:
					</Text>
					<Flex justifyContent={'space-evenly'}>
						<Flex alignItems={'center'} flexDir={'column'}>
							<Image src={React} alt="React" width={50} />
							<Text
								marginTop={2}
								color={'purple.400'}
								fontWeight={500}
							>
								React
							</Text>
						</Flex>
						<Flex alignItems={'center'} flexDir={'column'}>
							<Image src={TS} alt="TypeScript" width={50} />
							<Text
								marginTop={2}
								color={'purple.400'}
								fontWeight={500}
							>
								TypeScript
							</Text>
						</Flex>
					</Flex>
				</ModalBody>
				<ModalFooter>
					<Button onClick={() => setInfoOpen(false)}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 80 }}
			pos={{md: "relative", base: "fixed"}}
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" justifyContent={'center'} mx="8" gap={10}>
				<Image src={Logo} alt="Logo" width={50} />
				<Text fontSize="2xl" fontFamily="sans-serif" fontWeight="600">
					ExamSheets
				</Text>
				<CloseButton
					display={{ base: 'flex', md: 'none' }}
					onClick={onClose}
				/>
			</Flex>
			{LinkItems.map((link) => (
				<NavItem
					key={link.name}
					icon={link.icon}
					name={link.name}
					url={link.url}
				>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

interface NavItemProps extends FlexProps {
	icon: IconType;
	children: JSX.Element | string;
	name: string;
	url: string | undefined;
}
const NavItem = ({ icon, children, name, url, ...rest }: NavItemProps) => {
	const { setInfoOpen } = useContext(InfoModalContext);
	return (
		<Link
			href={url != undefined ? url : undefined}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
			onClick={name === 'About' ? () => setInfoOpen(true) : undefined}
		>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: 'purple.400',
					color: 'white',
					transitionProperty: 'all',
					transitionDuration: 'normal',
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="20"
						_groupHover={{
							color: 'white',
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};

interface MobileProps extends FlexProps {
	onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			w={'100vw'}
			{...rest}
		>
			<Image src={Logo} alt="Logo" width={50} />
			<Text
				fontSize="2xl"
				ml="8"
				fontFamily="sans-serif"
				fontWeight="500"
			>
				ExamSheets
			</Text>
			<IconButton
				variant="outline"
				onClick={onOpen}
				aria-label="open menu"
				icon={<BsList />}
				marginLeft={'auto'}
			/>
		</Flex>
	);
};
