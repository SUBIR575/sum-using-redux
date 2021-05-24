import React, { Component } from 'react'
import {connect} from 'react-redux'
import { firstNum, secondNum } from "./action/Action";

const mapStateToProps=(props)=>{
 return{
    add:props.addTwoNum.total,
 }
}
const mapDispatchToProps=(dispatch)=>{
  return{
       first:()=>dispatch(firstNum()),
       second:()=>dispatch(secondNum())
  }
}

class Add extends Component {
  render() {
  
    return (
  
      <div>
      <input
        type="text"
        placeholder="first number"
        onChange={(e) => {
          this.props.first(e.target.value);
        }}
      />
      <h2>
        <span>+</span>
      </h2>
      <input
        type="text"
        placeholder="second number"
        onChange={(e) => {
          this.props.second(e.target.value)
        }}
       />
        <input type='text' value={this.props.add}/>
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(Add);
