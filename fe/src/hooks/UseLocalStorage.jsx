import { useEffect, useState } from 'react'


function useLocalStorage(key,initialvalue) {

 const [Local, setLocal] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialvalue
  );

useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(Local));
},[key,Local])

  return [Local,setLocal]
}

export default useLocalStorage