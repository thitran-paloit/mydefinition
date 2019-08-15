import React from 'react';

export default (props) => {
    return (
        <div className={"bg-" + props.bg}>
            {props.children}
        </div>
    );
};