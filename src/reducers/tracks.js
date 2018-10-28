const initialState = [];

export default function getTracks(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'LOAD_TRACKS') {
        return action.payload;
    }
    return state;
}