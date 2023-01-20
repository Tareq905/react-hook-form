import React from 'react';
import ValidationAlert from '../ValidationAlert';

function TextareaInput({ name, label, type, value, alert, setInputs }) {
    return (
        <div>
            <label htmlFor={name} className="form-label text-large">{label}</label>
            <textarea id={name} name={name} value={value || ""} type={type} onChange={setInputs} className={"uk-textarea" + (alert ? ' uk-form-danger' : '')}></textarea>
            <ValidationAlert content={alert} />
        </div>
    )
}

export default TextareaInput;