import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello")
  }
   state={
    count:0
  };
  add=()=>{
    this.setState(
      current=>({count:current.count+1})
    )
  };
  minus=()=>{
    this.setState(current=>({count:current.count-1}))
  };
  componentDidMount(){
    console.log("component Render")
  }
  componentDidUpdate(){
    console.log("update");
  }
  render(){
    console.log("rendering");
    return <div>
      <h1>
         I m {this.state.count}
         <button onClick={this.add}>add</button>
         <button onClick={this.minus}>Minus</button>
      </h1>
    </div>
  }
}
export default App;
