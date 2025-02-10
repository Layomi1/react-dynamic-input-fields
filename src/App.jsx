import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [serviceList, setServiceList] = useState([
    { id: Date.now(), service: "" },
  ]);
  console.log(serviceList);
  const handleAddService = () => {
    setServiceList((prev) => [...prev, { id: Date.now(), service: "" }]);
  };

  const handleRemoveService = (id) => {
    setServiceList((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const handleServiceChange = (e, id) => {
    const { name, value } = e.target;
    setServiceList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [name]: value } : item))
    );
  };

  return (
    <form className="w-full h-screen flex justify-between p-[100px] my-0 ">
      <section className="max-w-700 ">
        <label htmlFor="service" className="font-semibold text-md ">
          Service(s)
        </label>

        {serviceList.map((serviceItem) => (
          <article
            key={serviceItem.id}
            className="flex mt-2 grow-2  w-full  gap-4"
          >
            <article className="flex flex-col gap-2 w-full">
              <input
                type="text"
                name="service"
                autoComplete="off"
                className="border-1 p-[7px] bg-transparent border-[#dcdcdc] w-full pl-2 rounded-[5px]  focus:border-[rgb(0,208,255)] h-[35px] "
                value={serviceItem.service}
                onChange={(e) => handleServiceChange(e, serviceItem.id)}
              />
              {serviceList[serviceList.length - 1].id === serviceItem.id &&
                serviceList.length < 4 && (
                  <Button
                    text="Add a Service"
                    handleAction={handleAddService}
                    isColor
                  />
                )}
            </article>

            <article className="flex flex-col items-start gap-4">
              {serviceList.length > 1 && (
                <Button
                  text="Remove"
                  handleAction={() => handleRemoveService(serviceItem.id)}
                  isColor={false}
                />
              )}
            </article>
          </article>
        ))}
      </section>
      <section className="ml-12 grow-1">
        <h2 className="font-semibold">Output</h2>
        <ul>
          {serviceList.map(
            (serviceItem) =>
              serviceItem.service && (
                <li key={serviceItem.id} className="list-disc">
                  {serviceItem.service}
                </li>
              )
          )}
        </ul>
      </section>
    </form>
  );
}

export default App;
