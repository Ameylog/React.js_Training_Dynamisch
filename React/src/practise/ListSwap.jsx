import React, { useState } from 'react';

function ListSwap() {
    const [list1, setList1] = useState([
        { title: "Array1", checked: false },
        { title: "Array2", checked: false },
        { title: "Array3", checked: false }
    ]);

    const [list2, setList2] = useState([
        { title: "Reduce1", checked: false },
        { title: "Reduce2", checked: false },
        { title: "Reduce3", checked: false }
    ]);

    const handledChange = (idx) => {
        const updatedList1 = [...list1];
        updatedList1[idx].checked = !updatedList1[idx].checked;      //false = true if index match 
        setList1(updatedList1);
    };

    const handleSwap = () => {
        const updatedList1 = [...list1];
        const updatedList2 = [...list2];

        updatedList1.forEach((item, idx) => {
            if (item.checked) {
                // const temp = updatedList1[idx].title;
                // updatedList1[idx].title = updatedList2[idx].title;
                // updatedList2[idx].title = temp;
                [updatedList1[idx].title, updatedList2[idx].title] = [updatedList2[idx].title, updatedList1[idx].title];
            }
            updatedList1[idx].checked = false;
        });

        setList1(updatedList1);
        setList2(updatedList2);
    };

    return (
        <div className="ml-0">
            <h3>List 1</h3>
            <ul type="none">
                {list1.map((val, idx) => (
                    <li key={idx}>
                        <input
                            type='checkbox'
                            checked={val.checked}
                            onChange={() => handledChange(idx)}
                        />
                        {val.title}
                    </li>
                ))}
            </ul>

            <br />
            <h3>List 2</h3>
            <ul type="none">
                {list2.map((val, idx) => (
                    <li key={idx}>{val.title}</li>
                ))}
            </ul>

            <button onClick={handleSwap} className='bg-secondary text-white border-1 rounded-2'>Swap</button>
        </div>
    );
}

export default ListSwap;
