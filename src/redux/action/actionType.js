import {ADDTODO ,DELETETODO ,EDITTODO ,TOGGLECOMLETE} from  './action'



export const addtodo = (newtodo) => {
  return {
    type: ADDTODO,
    payload: newtodo,
  };
};

export const edittodo = (editedtodo) => {
  return {
    type: EDITTODO,
    payload: editedtodo,
  };
};

export const deletetodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};

export const togglecomplelte = (id) => {
  return {
    type: TOGGLECOMLETE,
    payload: id,
  };
};