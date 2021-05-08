const initialState = ({
    _authenticated: false,
    _token: undefined
});

const reducer = (state = initialState, action) => {

    switch(action.type){
        case "LOGIN":
            const { token } = action.payload;
            console.log(action.payload);
            return {
                ...state,
                _authenticated: true,
                _token: token
            }
        case "LOGOUT":
            sessionStorage.setItem('token', '');
            return {
                ...state,
                _authenticated: false,
                _token: undefined
            }     
        default:
            return state;
    }

}

export default reducer;