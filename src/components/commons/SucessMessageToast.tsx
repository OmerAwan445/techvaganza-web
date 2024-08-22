import React from 'react'

const SucessMessageToast = ({ sucessMessage, setSucessMessage }:{ sucessMessage:string, setSucessMessage:React.Dispatch<React.SetStateAction<string |null | undefined>> }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
    <strong className="font-bold">Success!</strong>
    <span className="block sm:inline ml-2">
      {sucessMessage}
    </span>
    <span
      onClick={()=>setSucessMessage('')}
      className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
    >
      <svg
        className="fill-current h-6 w-6 text-green-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path
          d="M14.348 5.652a.5.5 0 0 0-.706 0L10 9.293 6.354 5.646a.5.5 0 1 0-.708.708L9.293 10l-3.647 3.646a.5.5 0 0 0 .708.708L10 10.707l3.646 3.647a.5.5 0 0 0 .708-.707L10.707 10l3.641-3.641a.5.5 0 0 0 0-.707z"
        />
      </svg>
    </span>
  </div>
  )
}

export default SucessMessageToast
