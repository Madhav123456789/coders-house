import { useState , useCallback , useRef , useEffect } from "react";

export const useStateCallback=(initialState)=>{
    // creating a state
    const [state , setState] = useState(initialState);
    const cbRef = useRef();

    // update state function
    const updateState = useCallback((state , callback)=>{
        if(callback && (typeof callback === "function")){
            cbRef.current = callback;       
        };

        // updating state
        setState((prev)=>{
            return typeof state === "function" ? state(prev) : state;
        });
    },[]);

    // run callback
    useEffect(()=>{
        if(cbRef.current){
            cbRef.current(state);
            // reset ref
            cbRef.current = null;
        }
    },[state]);

    return [state , updateState];
};