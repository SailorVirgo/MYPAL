import { HANDLE_AGE, HANDLE_PLAY, CLEAN_PET, HANDLE_FEED, ADD_TO_USER } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case HANDLE_AGE:
            return {
                ...state,
                pet: {
                    ...state.pet,
                    age: action.age,
                },
            };

        case HANDLE_PLAY:
            return {
                ...state,
                pet: {
                    ...state.pet,
                    playedWith: action.playedWith,
                },
            };

        case HANDLE_FEED:
            return {
                ...state,
                pet: {
                    ...state.pet,
                    hunger: action.hunger
                },
            };

        case CLEAN_PET:
            return {
                ...state,
                pet: {
                    ...state.pet,
                    isClean: action.isClean
                },
            };

        case ADD_TO_USER:
            return {
                ...state,
                userPets: [...action.userPets],
            };
        default:
            return state;
    };
};