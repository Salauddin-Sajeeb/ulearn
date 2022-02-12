import { useState } from 'react';

const Usefirebase = () => {

    const [percent, setPercent] = useState(0)
    const [lession1, setLession1] = useState(false)

    const handlePercent = () => {
        setPercent(percent + 25);
    }

    const finishLession1 = () => {
        setLession1(true)
    }
    return (
        {
            percent, lession1, handlePercent, finishLession1
        }
    );
};

export default Usefirebase;