import { InfoModalContext } from './InfoModalContext';
import { useState } from 'react';

export const InfoModalProvider= ({ children }: {children: JSX.Element}) => {
	const [isInfoOpen, setInfoOpen] = useState(false);

	return (
		<InfoModalContext.Provider
			value={{
				isInfoOpen,
				setInfoOpen,
			}}
		>
			{children}
		</InfoModalContext.Provider>
	);
};
