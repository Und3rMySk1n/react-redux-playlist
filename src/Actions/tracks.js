const mockApiData = [
    'Down, set, go',
    'A boy brushed in red, living in black and white world',
    'Desperate times, desperate measures'
];

export const loadTracksFromServer = () => dispatch => {
    setTimeout(() => {
        console.log('Tracks loaded from server');
        dispatch({
            type: 'LOAD_TRACKS',
            payload: mockApiData
        })
    }, 2000)
};