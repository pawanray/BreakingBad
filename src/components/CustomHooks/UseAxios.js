import React, { useEffect, useState } from 'react';
import HTTP from '../../utiles/_HTTP';
const UseAxios = ({ url, method, body, query }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const fetchData = () => {
        HTTP[method](url, body, {
            params: {
                ...query
            }
        }).then(res => {
            setResponse(res.data);
        }).catch((err) => {
            setError(err);
        })
            .finally(() => {
                setloading(false);
            });

    }


    useEffect(() => {
        fetchData()
    }, [url, method, body, query]);

    return {response, error, loading}
}

export default UseAxios
