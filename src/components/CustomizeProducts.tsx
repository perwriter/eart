"use Client"

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose Color </h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-purple-500">
          {/* <div className="absolute w-10 h-10 rounded-full ring-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/> */}
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </li>
      </ul>
      <h4 className="font-medium">Choose Size </h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-ecom text-ecom rounded-md py-1 px-4 cursor-pointer ">Small</li>
        <li className="ring-1 ring-ecom text-white  bg-ecom rounded-md py-1 px-4 cursor-pointer ">Medium</li>
        <li className="ring-1 ring-ecom bg-pink-200 text-white rounded-md py-1 px-4 cursor-pointer ">Large</li>
      </ul>
    </div>
  )
}

export default CustomizeProducts