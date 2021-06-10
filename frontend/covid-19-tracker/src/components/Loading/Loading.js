import React from 'react';
import ReactLoading from 'react-loading';

const Example = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'10px'} width={'10px'}
    />
);

export default Example;