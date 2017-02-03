import { FETCH_FIL_DATA } from '../actions/filterAction';

export default function(state = [], action) {
  switch (action.type) 
  { 
      case FETCH_FIL_DATA:
      {
        var datas = [action.payload.data];
        console.log(datas);
        var heads = Object.keys(datas[0]);
        var filterCopy = [];
        for(var i=0;i<datas.length;i++)
        {
          if(filterCopy.indexOf(datas[i]["eyeColor"]) === -1)
                filterCopy.push(datas[i]["eyeColor"]);
        }
        return (filterCopy);
        break;
     }
  default: return state;
  
  }
  return state;
}
