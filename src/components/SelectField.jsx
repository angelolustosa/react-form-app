// src/components/SelectField.js

const SelectField = ({ label, name, value, onChange, options = [], required = false }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label} {required && "*"}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Selecione</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
