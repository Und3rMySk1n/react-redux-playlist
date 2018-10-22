const initialState = [
    'Post-hardcore',
    'Dubstep'
];

export default function getGenres(state = initialState, action) {
    if (action.type === 'ADD_GENRE') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}