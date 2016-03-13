import Immutable from 'immutable';
import { UPDATE_ROUTE } from '../constants/action_types/router_action_types';
import ReducerNames from 'constants/reducer_names';

export default (state, action) => {
    const currentState = state.get(ReducerNames.ROUTER);
    switch (action.type) {
        case UPDATE_ROUTE:
            return currentState.merge(action.data);

        default:
            return currentState;
    }
}
