import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
// import logo from '../../../public/36911.JPG';

import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = useState([]);

    const [exTime, setExTime] = useState(0);
    const [breakTime, setBreakTime] = useState();

    const handleBreakTime = (selectedBreakTime) => {
        localStorage.setItem("Break-Time", selectedBreakTime);
        setBreakTime(selectedBreakTime);
    };

    useEffect(() => {
        const getBreakTime = localStorage.getItem("Break-Time");
        setBreakTime(getBreakTime);
    }, []);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])


    const addTime = (time) => {
        setExTime(exTime + parseInt(time));
    };
    const completeBtn = () => {
        Swal.fire("Success!", "Stay Healthy!", "success");
    };

    return (
        <div className='container-items'>
            <div className="items">
                {
                    items.map(item => <Item
                        item={item}
                        key={item.id}
                        btn={addTime}
                    ></Item>)
                }
            </div>
            <div className="time">
                <div className="info">
                    <img src="36911.JPG" alt="" />
                    <div className="info-text">
                        <h4>MD. HABIBUL BASAR SHOHAG</h4>
                        <p>Pabna,Rajshahi</p>
                    </div>
                </div>
                <div className="more-info">
                    <div>
                        <h2>80kg</h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2>5'11" </h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>20 Years</h2>
                        <p>Age</p>
                    </div>
                </div>
                <div className="break">
                    <h2>Add a break</h2>
                    <div className="btn">
                        <button onClick={() => handleBreakTime(10)}>10s</button>
                        <button onClick={() => handleBreakTime(20)}>20s</button>
                        <button onClick={() => handleBreakTime(30)}>30s</button>
                        <button onClick={() => handleBreakTime(40)}>40s</button>
                        <button onClick={() => handleBreakTime(50)}>50s</button>
                    </div>
                </div>
                <div className="Ex-details">
                    <h2>Exercise Details</h2>
                    <div className="time-Exercise">
                        <h3>Exercise Time</h3>
                        <p>{exTime} seconds</p>
                    </div>
                    <div className="break-time">
                        <h3>Break Time</h3>
                        <p>{breakTime} seconds</p>
                    </div>
                </div>
                <div className='activity'>
                    <button onClick={completeBtn} className="comp-btn">
                        Activity Completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Items;