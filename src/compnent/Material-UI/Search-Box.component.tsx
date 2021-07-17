/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Input } from '@material-ui/core';
import React, { ChangeEventHandler } from 'react';
import './input.css'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface MyInputParameter{
    placeholder:string
    handleChange:ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
    type:string
  
}

const SearchBox :React.FC<MyInputParameter>= ({placeholder,handleChange}) => {
    return <div className="box"> <input
     
        className="input"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
       />
       <i className="fas fa-search"></i>
      </div>
}

export default SearchBox;
