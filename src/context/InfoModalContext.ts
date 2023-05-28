import { createContext } from 'react';

interface IInfoContext {
	isInfoOpen: boolean;
	setInfoOpen: (isOpen: boolean) => void;
}

export const InfoModalContext = createContext<IInfoContext>({
	isInfoOpen: false,
    setInfoOpen: () => {}
});
