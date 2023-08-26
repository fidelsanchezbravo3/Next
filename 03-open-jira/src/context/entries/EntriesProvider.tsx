import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

interface Props {
    children: JSX.Element;
}

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: asdfsafsafdasfsa',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En progreso: dtjtgyjtyjtygjgjghjgjhgjg',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: mnbbnmbmnbmnvbnmvbnbv',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
}

export const EntriesProvider:FC<Props> = ({ children }) => {
    const [ state, dispach ] = useReducer( entriesReducer, Entries_INITIAL_STATE );

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispach({ type: '[Entries] Add-Entry', payload: newEntry })
    }

    const updateEntry = ( entry: Entry ) => {
        dispach({ type: '[Entries] Update-Entry', payload: entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
}