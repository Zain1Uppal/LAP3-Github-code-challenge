
export const updateUsername = d => ({ 
    type: 'UPDATE_USERNAME',
    payload: d 
});
export const updateReponame = d => ({ 
    type: 'UPDATE_REPONAME',
    payload: d 
});

export const setError = err => ({
    type: 'SET_ERROR',
    payload: err.message
});