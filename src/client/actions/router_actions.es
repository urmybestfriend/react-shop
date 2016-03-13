import _ from 'lodash';
import store from 'store/app_store';
import { UPDATE_ROUTE } from 'constants/action_types/router_action_types';

const updateRoute = (data) => {
    let routeData = _.pick(data, ['path', 'params', 'query']);
    routeData.name = _.last(data.routes).name;
    store.dispatch({
        type: UPDATE_ROUTE,
        data: routeData
    });
};

export default {
    updateRoute
};
