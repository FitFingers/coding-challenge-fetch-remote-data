import { useCallback } from "react";

const styles = {
  inputStyle: {
    margin: "10px",
  },
};

// ===================================================
// COMPONENTS
// ===================================================

const Input = ({ name, updateField }) => {
  const handleChange = useCallback((e) => updateField(e), [updateField]);

  return (
    <div style={styles.inputStyle}>
      <label htmlFor={name}>{name}</label>
      <input name={name} onChange={handleChange} />
    </div>
  );
};

export default Input;
