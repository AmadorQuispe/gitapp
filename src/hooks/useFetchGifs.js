import { useEffect, useState } from "react"
import { getGits } from "../helpers/getGifs";

export const useFetchGifs = (category)=>{
    const [state, setState] = useState({data:[],loading:true});
    useEffect(() => {
        getGits(category)
          .then( imgs=>setState({data:imgs,loading:false}) )
          .catch(setState({data:[],loading:false}));
      }, []);
      return state;
}