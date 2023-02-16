import { RootState } from "../store";


const initialState: any = {
    overRideArr: [],
};


export const overRide = (key: any) => {
    return {
        type: "OVERRIDE",
        payload: key,
    };
};

export const resetOverRide = (key: any) => {
    return {
        type: "REMOVE_OVERRIDE",
        payload: key,
    };
};



export function overRideReducer(state = initialState, action: any) {
    switch (action.type) {
        case "OVERRIDE":

            return {
                ...state,
                overRideArr: [action.payload],
            };
        case "REMOVE_OVERRIDE":


            return {
                ...state,
                overRideArr: [action.payload],
            };

        default:
            return state;
    }
}

export const overRideRootState = (state: RootState) => state.overRideReducer.overRideArr;