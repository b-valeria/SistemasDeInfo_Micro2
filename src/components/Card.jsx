import React from 'react';

export default function Card({ title, text }) {
    return (
        <div className="rounded-2xl h-72 w-72 bg-gradient-to-br from-gray-200/30 to-gray-300/30 backdrop-blur-md border border-gray-200/50 pt-2 px-5">
            <h1 className="text-center text-lg font-bold mb-10">{title}</h1>
            <p className="text-center">
                {text}
            </p>
        </div>
    );
}

