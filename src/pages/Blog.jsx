import React from 'react';

const Blog = () => {
    return (
        <div className='bg-primary p-3 rounded'>
            <h3>1.Tell the differences between uncontrolled and controlled components.</h3>
            <p>Ans:In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            <h3>2.How to validate React props using PropTypes</h3>
            <p>   1. any : The prop can be of any data type.
                2.bool : The prop should be a Boolean.
                3.number : The prop should be a number.
                4.string : The prop should be a string.
                5.func : The prop should be a function.
                6.array : The prop should be an array.
                7. object : The prop should be an object.
            </p>
            <h3>3.Tell us the difference between nodejs and express js.</h3>
            <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
            <h3>4.What is a custom hook, and why will you create a custom hook?

            </h3>
            <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

        </div>
    );
};

export default Blog;