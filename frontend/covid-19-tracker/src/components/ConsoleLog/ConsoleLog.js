import React from 'react';

const consoleLog = () => {
    let msg = "%c Welcome to use Alberta COVID-19 Tracker!";
    let styles = ['font-size: 12px',
        'font-family: monospace',
        'background: white',
        'display: inline - block',
        'color: black',
        'padding: 8px 19px',
        'border: 1px dashed'
    ].join(';');
    console.log(msg, styles);
    return (
        <div>

        </div>
    );
};

export default consoleLog;