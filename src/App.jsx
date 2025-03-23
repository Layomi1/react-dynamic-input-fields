import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  // product 2
  const handleFormChange = (e, index) => {
    let data = [...inputFields];
    data[index][e.target.name] = e.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = { name: "", age: "" };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };
  return (
    <section className=" flex flex-col pt-8 items-center w-full h-screen">
      <h1 className="text-2xl">Dynamic Form</h1>
      <form onSubmit={submit} className="flex px-8 items-center">
        <div>
          {inputFields.map((input, index) => (
            <div key={index} className="">
              <article className="flex items-center  mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border-1 border-black h-9 pl-1  "
                  value={input.name}
                  onChange={(e) => handleFormChange(e, index)}
                />
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  className="border-1 border-black ml-2 pl-1 h-9"
                  value={input.age}
                  onChange={(e) => handleFormChange(e, index)}
                />
                {inputFields.length > 1 && (
                  <Button
                    handleAction={() => removeFields(index)}
                    text="Remove"
                  />
                )}
              </article>
              {index === inputFields.length - 1 && (
                <article className=" flex mt-4 ">
                  <Button handleAction={addFields} isColor text="Add More" />
                </article>
              )}
            </div>
          ))}
        </div>

        <section className="ml-12 grow-1">
          <h2 className="font-semibold">Output</h2>
          <ul>
            {inputFields.map((input, index) => (
              <li key={index} className="list-disc">
                {input.name}: <span>{input.age}</span>
              </li>
            ))}
          </ul>
        </section>
      </form>
    </section>
  );
}

export default App;
