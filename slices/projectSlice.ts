import { RootState } from "../store";


const initialState: any = {
    technologyArray: [],
};


export const choosenTech = (key: any) => {
    return {
        type: "TECH_VALUE",
        payload: key,
    };
};

export const removeTech = (key: any) => {
    return {
        type: "REMOVE_TECH",
        payload: key,
    };
};

export function projectReducer(state = initialState, action: any) {
    switch (action.type) {
        case "TECH_VALUE":

            const storeData = state.technologyArray
            return {
                ...state,
                technologyArray: [...storeData, action.payload],
            };
        case "REMOVE_TECH":

            const storeDataPRemove = state.technologyArray.filter(
                (key: any) => key !== action.payload
            );
            return {
                ...state,
                technologyArray: [...storeDataPRemove],
            };

        default:
            return state;
    }
}

export const projectRootState = (state: RootState) => state.projectReducer.technologyArray;