import React, { useState, useEffect, createContext } from 'react'

export const FContext = createContext();
const FProvider = (props) => {
    const [button, setButton] = useState(false);
    const [button2, setButton2] = useState(false);
    const [currentproy, setCurrentproy] = useState('');
    const [cond, setCond] = useState(false);
    const [viewproy, setViewproy] = useState([])
    const getViewproy = id => {
        fetch('https://api.bluemoonsports.works/api/viewproy/' + id)
            .then(res => res.json())
            .then(res => setViewproy(res))
    }


    return (
        <FContext.Provider
            value={{
                currentproy,
                viewproy,
                getViewproy,
                cond,
                setCond
            }}>
            {props.children}

        </FContext.Provider>
    );
}
export default FProvider;