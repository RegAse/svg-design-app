'use strict'

import { useState, useEffect } from "react";
import { ChromePicker } from 'react-color'

function ButtonExample(props) {
    // const [color, setColor] = useState(props.color);
    const [showPicker, setShowPicker] = useState(false);

    const popover = {
        position: 'absolute',
        zIndex: '2',
    }
    const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }

    const handleClick = showPicker => setShowPicker(true);
    const handleClose = showPicker => setShowPicker(!showPicker);
    // const handleChange = color => setColor(color);

    return (
        <div>
            <button className="btn-color" style={{backgroundColor: props.color}} onClick={handleClick}></button>
            {showPicker ? <div style={popover}>
                <div style={cover} onClick={handleClose} />
                <ChromePicker color={props.color} onChange={props.onChange} />
            </div> : null}
        </div>
    )
}

export default ButtonExample