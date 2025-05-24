'use client';

import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner: React.FC = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <ClipLoader color="#3498db" size={50} />
        </div>
    );
};

export default Spinner;