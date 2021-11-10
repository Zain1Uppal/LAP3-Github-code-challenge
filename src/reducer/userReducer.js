const initState = {
    user: [
        { username: "", repoName:''}
    ]
};

export const userReducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE_USERNAME':
            return { ...state, username: action.payload };
        case 'UPDATE_REPONAME':
            return { ...state, repoName: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state
    };
};
