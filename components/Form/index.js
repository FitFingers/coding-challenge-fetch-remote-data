import { useCallback, useState } from "react";
import Input from "../Input";

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#0003",
  },
};

// ===================================================
// COMPONENTS
// ===================================================

const Form = ({ addLocalData }) => {
  const [formState, setFormState] = useState({
    id: "",
    postId: "",
    name: "",
    email: "",
    body: "",
  });

  const updateField = useCallback((e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    addLocalData(formState);
  }, [addLocalData, formState]);

  return (
    <div style={styles.formStyle}>
      <Input name="id" updateField={updateField} />
      <Input name="postId" updateField={updateField} />
      <Input name="name" updateField={updateField} />
      <Input name="email" updateField={updateField} />
      <Input name="body" updateField={updateField} />
      <button onClick={handleSubmit}>Add item</button>
    </div>
  );
};

export default Form;
