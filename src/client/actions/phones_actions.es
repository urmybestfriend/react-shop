"use strict";

import store from 'store/app_store';
import PhonesActionTypes from 'constants/action_types/phones_action_types';
import request from 'utils/request';

// const getAllPhones = () => {
//     request.get('phones/getAll', {}).then((response) => {
//         let {notes} = response;

//         store.dispatch({
//             type: NotesActionTypes.GET_NOTES,
//             data: { notes }
//         });
//     }, () => {});
// };

const getAllPhones = async () => {
    //let allPhones = await request.get('phones/getAll', {});
    console.log('allPhones');
};

const addPhone = async (phone) => {
    let result = await request.post('phones/add', {phone});
    console.log('result', phone);
};

// const removeNote = (id) => {
//     request.post('notes/remove', { id }).then((response) => {
//         getNotes();
//     }, () => {});
// };

// const updateNote = (note) => {
//     request.post('notes/update', { note }).then((response) => {
//         getNotes();
//     }, () => {});
// };


export default {
    getAllPhones,
    addPhone
};
