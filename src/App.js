import React from 'react';
import PropTypes from "prop-types";
function Food({name,rating}){
  return (
    <div>
    <h1>I like {name}</h1>
    <h3>rating:{rating}</h3>
    </div>
  )
}
const foodILike=[{name:"kasumin",ps:"yellow",id:"1",rating:4.6},{name:"ayume",ps:"pink",id:"2",rating:4.9}];
function renderFood(dish){
  return <Food name={dish.name} rating={dish.rating} key={dish.id}/>
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
    
  );
}
Food.propTypes={
  name:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
};
export default App;
