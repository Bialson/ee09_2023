import { Box, Button, Link } from '@chakra-ui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useMarkdown } from '../hooks/useMarkdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import Sheet2023 from '../markdown/EE09_2023.md';
import { BsCloudArrowDownFill } from 'react-icons/bs';

export const Sheet = () => {
	const { httpResponse: markdown } = useMarkdown(Sheet2023);
	return (
		<Box width={'50%'} overflowY={'scroll'}>
			<ReactMarkdown
				children={markdown?.data}
				components={ChakraUIRenderer({
					code({ inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '');
						return !inline && match ? (
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, '')}
								// @ts-ignore
								style={oneDark} // theme
								language={match[1]}
								PreTag="section" // parent tag
								{...props}
							/>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				})}
				remarkPlugins={[remarkGfm]}
			/>
			<Link download href='/public/EE09_2023.zip'>
				Pobierz pliki z rozwiązaniem &nbsp;
				<Button
					aria-label="Toggle Color Mode"
					_focus={{ boxShadow: 'none' }}
					rounded={'full'}
					padding={4}
					fontSize={20}
					width={'fit-content'}
					height={'fit-content'}
				>
					<BsCloudArrowDownFill />
				</Button>
			</Link>
		</Box>
	);
};
