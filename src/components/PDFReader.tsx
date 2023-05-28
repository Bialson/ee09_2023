import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import File from '../assets/ee09_2023.pdf';

import type { PDFDocumentProxy } from 'pdfjs-dist';
import { Box } from '@chakra-ui/react';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

const options = {
	cMapUrl: 'cmaps/',
	standardFontDataUrl: 'standard_fonts/',
};

type PDFFile = string | File | null;

export function PDFReader() {
	const [file, setFile] = useState<PDFFile>('../assets/ee09_2023.pdf');
	const [numPages, setNumPages] = useState<number>();

	function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { files } = event.target;

		if (files && files[0]) {
			setFile(files[0] || null);
		}
	}

	function onDocumentLoadSuccess({
		numPages: nextNumPages,
	}: PDFDocumentProxy) {
		setNumPages(nextNumPages);
	}

	return (
		<Box overflow={'scroll'}>
			<Document
				file={File}
				onLoadSuccess={onDocumentLoadSuccess}
				options={options}
			>
				{Array.from(new Array(numPages), (el, index) => (
					<Page
						key={`page_${index + 1}`}
						pageNumber={index + 1}
						scale={1.2}
					/>
				))}
			</Document>
		</Box>
	);
}
