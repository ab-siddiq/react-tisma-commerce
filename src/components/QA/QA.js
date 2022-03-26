import React from 'react';

const QA = () => {
    return (
        <div>
            <h2>How React works?</h2>
            <p>Answer: React is a library of javascript which builds user interface using declarative code. Declarative means clean idea of a particular item. Using declarative code, we create component which is how our content will be shown in the ui. Components separate the same item into a block and work show data using props. To maintain logical data react have state. </p>
            <h2>Props vs State</h2>
            <p>Answer: Props are send by component. State can passed as an props. State contain information of a component. State is created in the component and it can be changed. Props are read only and can not be changed. </p>
            <h2>How useState works?</h2>
            <p>Answer: useState is used for handling different state of condition or situation. It has two constant variable. One is act a function and another is like a varible. ex const (state,setState) = useState([]).Here state is a variable and setState is a function. In the state we pass value through setState and state recieve the value. Here useState initial value is an empty array. It will be updated using with those two constant variable. </p>
        </div>
    );
};

export default QA;