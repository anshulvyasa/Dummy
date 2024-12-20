import { createContext, useState } from "react";

export const Kush = createContext(null);

export function Provider({ children }) {
  const [value, setValue] = useState(5);

  function abc() {
    console.log("This is ABC fuction");
  }

  const Obj = {
    value,
    setValue,
    abc,
  };

  return (
    <Kush.Provider
      value={{
        Obj,
      }}
    >
      {children}
    </Kush.Provider>
  );
}
