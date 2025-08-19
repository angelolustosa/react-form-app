// src/components/InputField.js

const InputField = ({ label, name, value, onChange, type = "text", required = false }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
