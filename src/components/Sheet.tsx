import { Box } from '@chakra-ui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useMarkdown } from '../hooks/useMarkdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export const Sheet = () => {
	const { httpResponse: markdown } = useMarkdown(
		'/src/markdown/EE09_2023.md'
	);
	return (
		<Box width={'45%'}>
			<ReactMarkdown
				children={markdown?.data}
				components={ChakraUIRenderer({
					code({ inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '');
						return !inline && match ? (
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, '')}
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
		</Box>
	);
};
