export const reducer = (state, action) => {
    switch (action.type) {

        case "USER_LOGIN": {
            if (action.payload.name && action.payload.email && action.payload.password && action.payload.created) {
                console.log(action.payload)
                return { ...state, user: action.payload };
            }

            else {
                console.log(`invalid data in USER_LOGIN reducer `);
                return state;
            }
        }

        case "USER_LOGOUT": {
            return { ...state, user: null }; // set this to null on purpose, do not change
        }

        default: {
            return state;
        }
    }
}