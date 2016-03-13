// in future we must be select only small part of data for different views
// this method will help us do it faster
// but now for getting single object or property from store
// please, use only selector

// read more about reselect:
// http://rackt.github.io/redux/docs/recipes/ComputingDerivedData.html
// https://github.com/faassen/reselect

// import { createSelector } from 'reselect';

export function currentRouteName(state) {
    return state.router.get('name');
}
