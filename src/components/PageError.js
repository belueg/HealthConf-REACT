import React from 'react';
import './styles/PageError.css'

function PageError(props) {
    return (
        <div className="Error">
            <span role="img" aria-label="Sad">😢</span>
            {props.error.message}
            <span span role="img" aria-label="Worried"> 😨</span>
        </div>
    )

}

export default PageError