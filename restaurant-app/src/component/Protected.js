import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const Protected = ({ component: Cmp, ...rest }) => {
    <Route
        {...rest}
        render={() => {
            localStorage.getItem('login') ? (
                <Cmp {...rest} />
            ) :
                <Navigate to={'/login'} />;
        }}
    />


};

export default Protected;