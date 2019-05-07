import { HIDE_MODAL, SHOW_MODAL } from './action_types';

export const showModal = (modalType, modalProps) => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    modalType: modalType,
    modalProps: modalProps
  });
}

export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL
  });
}