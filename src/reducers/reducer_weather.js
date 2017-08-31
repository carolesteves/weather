import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        // return state.concat([action.payload.data]);
        // the line below means the sabe as the above code
        return [ action.payload.data, ...state ];
    }
    return state;
}
