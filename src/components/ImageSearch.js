import React,{useState} from "react";

const ImageSearch = ({serachText}) => {
    const[text,setText]=useState('')

    const onSubmit =(e) => {
        e.preventDefault();

        serachText(text);

        setText('')
    }
  return (
    <>
          <div className="m-5 flex justify-center align-item-center">
              <input
              
              onChange={ e => setText(e.target.value)}
                  type="text"
                  className="mx-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5" />
        
              <button
              onClick={onSubmit}
                  type="submit"
                  className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 h-10"
              >
                  Search
              </button>
          </div>
          </>  
  );
};

export default ImageSearch;
