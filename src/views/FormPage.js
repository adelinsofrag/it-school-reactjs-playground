import React, { useState } from "react";

function FormPage() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
      </label>
    </form>
  );
}

export default FormPage;
