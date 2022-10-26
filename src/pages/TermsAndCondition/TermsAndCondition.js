import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h1>this is my terms and condition</h1>
            <p>go back register</p><Link to='/register'>register</Link>
        </div>
    );
};

export default TermsAndCondition;