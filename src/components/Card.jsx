import React from 'react';

export default function Card({ title, text, width = "72", height = "auto", className = "" }) {
    return (
        <div 
            className={`rounded-2xl bg-gradient-to-br from-gray-200/30 to-gray-300/30 backdrop-blur-md border border-gray-200/50 pt-2 px-5 pb-5 ${className}`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <h1 className="text-center text-lg font-bold mb-4">{title}</h1>
            <p className="text-center text-sm">
                {text}
            </p>
        </div>
    );
}

