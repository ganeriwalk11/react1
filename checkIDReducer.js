import { CHECK_ID } from '../actions/validations';
import { CHECK_INDEX } from '../actions/validations';

export default function(state ={color:'black',borderColor:'white'}, action) {
  switch (action.type) {
    case CHECK_INDEX:
           { switch (action.payload.head["head"]){
                case "index":
                    if (action.payload.id == parseInt(action.payload.id, 10))
                    return {color:'green',borderColor:'3px solid green'};
                    else
                    return {color:'red',borderColor:'3px solid red'};
                    break;
            default: return {color:'green',borderColor:'3px solid green'};
            }
            break;
        }
        
    case CHECK_ID:{
        var data=[];
        data = action.payload.data;
        var head = action.payload.head;
        var value = action.payload.value;
        for(var i=0;i<data[0].length;i++)
        {
            if(data[0][i][head] == value){
                return {color:'red',borderColor:'3px solid red'};
            } 
        }
        return {color:'green',borderColor:'3px solid green'};
        break;
    }
    defualt: return state;
    
  }
  return state;
}

