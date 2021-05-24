import {FIRST_NUM,SECOND_NUM,FINAL_NUM} from './Type';

export const firstNum= (data)=>{
  return { 
    type:FIRST_NUM,
    payload:data
}
}
export const secondNum = (data)=>{
  return { 
    type:SECOND_NUM,
    payload:data
}
}
export const finalNum= ()=>{
  return { 
    type:FINAL_NUM,
    
}
}