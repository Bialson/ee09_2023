import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

export const useMarkdown = (url: string) => {
	const [httpResponse, setHttpResponse] = useState<AxiosResponse>();
	const fetchData = async () => {
		try {
			const response = await axios.get(url)
			console.log(response);
			setHttpResponse(response);
		}
		catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		fetchData();
	}, [url]);
	return {httpResponse};
};