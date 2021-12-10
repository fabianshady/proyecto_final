import React, { useState, useEffect, createContext } from 'react'

export const FContext = createContext();
const FProvider = (props) => {
    const [button, setButton] = useState(false);
    const [button2, setButton2] = useState(false);
    const [currentproy, setCurrentproy] = useState('');
    const [currentlab, setCurrentlab] = useState('');
    const [cond, setCond] = useState(false);
    const [viewproy, setViewproy] = useState([])
    const getViewproy = id => {
        fetch('https://api.bluemoonsports.works/api/viewproy/' + id)
            .then(res => res.json())
            .then(res => setViewproy(res))
    }
    const [viewlab, setViewlab] = useState([])
    const getViewlab = id => {
        fetch('https://api.bluemoonsports.works/api/viewlab/' + id)
            .then(res => res.json())
            .then(res => setViewlab(res))
    }

    const [reportlab, setReportlab] = useState([])
    const getReportlab = id => {
        fetch('https://api.bluemoonsports.works/api/reportlab/' + id)
            .then(res => res.json())
            .then(res => setReportlab(res))
    }

    const [reportproy, setReportproy] = useState([])
    const getReportproy = id => {
        fetch('https://api.bluemoonsports.works/api/reportproy/' + id)
            .then(res => res.json())
            .then(res => setReportproy(res))
    }

    const [condi, setCondi] = useState(true)

    const [value, setValue] = useState();

  

    return (
        <FContext.Provider
            value={{
                currentproy,
                viewproy,
                getViewproy,
                cond,
                setCond,
                reportlab,
                reportproy,
                getReportlab,
                getReportproy,
                condi,
                setCondi,
                currentlab,
                viewlab,
                getViewlab,
                setCurrentlab,
                setCurrentproy
            }}>
            {props.children}

        </FContext.Provider>
    );
}
export default FProvider;