import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './userSlice';

function ShowTodos() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.user);

    const handleCllick = () => {
        dispatch(fetchUserData());
    }
    return (
        <div>

            <div className='d-flex justify-content-center mt-5'>
                <button className='bg-success border-0 rounded text-white px-2 py-2' onClick={handleCllick}>Show Data</button>

                <br /><br />

            </div>

            <div className='d-flex justify-content-center mt-5'>
                {data ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val) => (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.completed?.toString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : ""}

            </div>
        </div>
    )
}

export default ShowTodos
