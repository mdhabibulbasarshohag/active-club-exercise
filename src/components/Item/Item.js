import React from 'react';
import './item.css'

const Item = (props) => {
    console.log(props.item);
    const { name, picture, info, time } = props.item;
    const { btn } = props;

    return (
        <div className='cart'>
            <div className='cart-img'>
                <img src={picture} alt="cart" />
            </div>
            <div className='cart-text'>
                <h3>{name}</h3>
                <p>{info}</p>
                <p>Time required : {time}</p>
            </div>
            <div className="btn-cart">
                <button onClick={() => btn(props.item.time)}>add to item</button>
            </div>
        </div>
    );
};

export default Item;