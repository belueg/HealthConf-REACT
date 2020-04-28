import React from 'react';
import hashGravatar from './hashGravatar'

function Gravatar(props) {


    return (
        <img className={props.className}
            width="100" height="100"
            src={hashGravatar(props.email)}
            alt="Avatar" />

    )
}

export default Gravatar;