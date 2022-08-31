import {useEffect, useState} from "react";

export default function useApi(url: any) {
    const [isLoading, setIsLoading]: any = useState(true);
    const [data, setData]: any = useState(null);
    const fetchApi = () => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(json => {
                setIsLoading(false);
                setData(json)
            })
    };

    useEffect(()=>{
        fetchApi()
    }, [])

    return {data, isLoading}
}