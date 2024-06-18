import React, { forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputField = forwardRef(({ label, id, name, type, value, onChange, onBlur, placeholder, style, toggleVisibility, eyeType, withEyeIcon,className,labelClassName,onPaste,accept }, ref) => {

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>{label}</label><br />
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        placeholder={placeholder}
        style={style}
        ref={ref}
        onPaste={onPaste}
        accept={accept}
      />
      {withEyeIcon && (
        <span style={{ position: "absolute", transform: "translateX(-23px)" }}>
          {eyeType === "password" ? (
            <FaEyeSlash onClick={toggleVisibility} style={{ height: "3em" }} />
          ) : (
            <FaEye onClick={toggleVisibility} style={{ height: "3em" }} />
          )}
        </span>
      )}
    </div>
  );
});

export default InputField;
