import React from 'react';
import { useState } from 'react/cjs/react.development';

const CoursePercent = () => {
    const [percent, setPercent] = useState(0)
    const percentCount = () => {
        setPercent(percent + 25)
    }
    return (
        <div>
            {percent}
        </div>
    );
};

export default CoursePercent;