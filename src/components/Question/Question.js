import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question'>
            <h1>Question and Answer</h1>
            <div>
                <h1>Question 1 : How does react work??</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components.
                    React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                    It's possible to have as many components as necessary without cluttering your code.
                </p>
            </div>
            <div>
                <h1>Question 2 : Difference between props and state??</h1>
                <p>PROPS:
                    The Data is passed from one component to another.
                    It is Immutable (cannot be modified).
                    Props can be used with state and functional components.
                </p>
                <p>STATE:
                    The Data is passed within the component only.
                    It is Mutable ( can be modified).
                    State can be used only with the state components/class component.s</p>
            </div>
            <div>
                <h1>Question 3 : What does useEffect do without data load??</h1>
                <p>1. Reading from local storage. <br />
                    2. Registering and deregistering event listeners.</p>
            </div>
        </div>
    );
};

export default Question;