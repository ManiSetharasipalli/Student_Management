// UnderDevelopment component displays a message indicating that the page is under development.

import React from 'react';

export default function UnderDevelopment({Icon, text}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <Icon className="w-16 h-16 text-blue-500 mx-auto animate-bounce" />
        <h1 className="text-3xl font-bold text-gray-800">
          Under Development
        </h1>
        <p className="text-gray-600 max-w-md">{text}</p>
      </div>
    </div>
  );
}

