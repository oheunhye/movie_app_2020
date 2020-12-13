import React from 'react';
import PropTypes from "prop-types";

function Food({fName, picture, rating}){
  return (
          <div>
            <h2>I like {fName}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={fName}/>
          </div>
          );
}

Food.propTypes = {
  fName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodLike = [
  {
    id:1,
    name:"kimchi",
    image:"https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
  //  rating:3
  },
  {
    id:2,
    name:"ramen",
    image:"https://blog.kakaocdn.net/dn/FjpVP/btqIghtnuT1/hSMMXzgdLKdTcneMz5xn3K/img.jpg",
    rating:2.8
  },
  {
    id:3,
    name:"bulgogi",
    image:"https://img4.tmon.kr/cdn3/deals/2020/04/27/3455335334/original_3455335334_front_20a3d_1587970761production.jpg",
    rating:2.5
  }
];

function renderFood(dish){
  return <Food 
              key={dish.id} 
              fName={dish.name} 
              picture={dish.image} 
              rating={dish.rating}    
          />;
}

function App() {
  return (
          <div>{foodLike.map(renderFood)}</div>
        );
}

export default App;
