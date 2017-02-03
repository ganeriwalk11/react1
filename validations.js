export const CHECK_ID = 'CHECK_ID';
export const CHECK_INDEX = 'CHECK_INDEX';

export function checkIndexAction(id,head,color) {
  return {
    type: CHECK_INDEX,
    payload:{
        id: id,
        head: head,
        color:color
    } 
  };
}

export function checkIDAction(data,head,value,color) {
  return {
    type: CHECK_ID,
    payload:{
        data: data,
        head: head,
        value: value,
        color:color
    } 
  };
}


