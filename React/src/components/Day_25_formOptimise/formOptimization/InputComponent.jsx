import React from 'react'

function InputComponent(props) {
    const { type, name, id, value =null, placeholder, style, formik, labelName, labelStyle } = props
    return <div>
        <label htmlFor={id} style={labelStyle}>{labelName}</label> <br />
        <input
            type={type}
            name={name}
            id={id}
            value={value == null ? formik.values[name] : value }
            // value={formik.values[name]}
            placeholder={placeholder}
            style={style}
            onChange={formik.handleChange} />
    </div>
}

export default InputComponent;
