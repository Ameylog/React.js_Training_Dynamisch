import React from 'react';
import useApi from './useApi';

function useApiDemo() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, error } = useApi(apiUrl);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Data from API:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {console.log(JSON.stringify(data, null, 2))}
            {/* {
                data.map((val) => {
                    return <ul>
                        <li>{val.name}</li>
                        <li>{val.username}</li>
                    </ul>
                })
            } */}
        </div>
    );
}

export default useApiDemo;
