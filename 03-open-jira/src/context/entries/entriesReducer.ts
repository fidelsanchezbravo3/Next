import { Entry } from '@/interfaces';
import { EntriesState } from './';

type EntriesType =
| { type: '[Entries] Add-Entry', payload: Entry }
| { type: '[Entries] Update-Entry', payload: Entry }

export const entriesReducer = ( state: EntriesState, action: EntriesType ): EntriesState => {

    switch (action.type){
        case '[Entries] Add-Entry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }
        case '[Entries] Update-Entry':
            return {
                ...state,
                entries: state.entries.map( entry => {
                    if(entry._id === action.payload._id){
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }
        default:
            return state;
    }

}