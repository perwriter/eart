import React from 'react'

const ErrorPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-xl font-semibold mb-4">Oops! Something went wrong</p>
        <p className="text-gray-600">An error occurred on the server.</p>
      </div>
    </div>
  )
}

export default ErrorPage