import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
    children: JSX.Element;
}

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,
}

export const UIProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' });
    }

    const setIsAddingEntry = ( state: boolean ) => {
        dispatch({ type: 'UI - Add Entry', payload: state })
    }

    const startDragging = () => dispatch({ type: 'UI - Start Dragging' });

    const endDragging = () => dispatch({ type: 'UI - End Dragging' });

    return (
        <UIContext.Provider value={{
            ...state,
            //Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            endDragging,
            startDragging
        }}>
            { children }
        </UIContext.Provider>
    );
}