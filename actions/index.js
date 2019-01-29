export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

// we are not updating a backend database so no need to do api calls
// we can just return action objects


export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}

export function addEntry (entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}