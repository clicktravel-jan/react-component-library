import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  fieldId,
  fieldName,
  name,
  onChange,
  helpText,
  value,
  autoComplete,
  required,
  readOnly,
  customClasses,
}) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <input
      type="text"
      id={fieldId}
      name={name}
      className={customClasses ? `form-control ${customClasses}` : 'form-control'}
      onChange={onChange}
      defaultValue={value}
      value={value}
      autoComplete={autoComplete}
      required={required}
      readOnly={readOnly}
    />
    { helpText && <span className="help-block">{helpText}</span> }
  </div>
);

// eslint-disable-next-line
Input.propTypes = {
  fieldId: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  customClasses: PropTypes.string,
};

// eslint-disable-next-line
Input.defaultProps = {
  onChange: null,
  helpText: null,
  value: null,
  fieldId: null,
  name: null,
  autoComplete: 'on',
  required: false,
  readOnly: false,
  customClasses: '',
};

export default Input;
