import Form from "./Form/Form";
import { Toaster } from 'react-hot-toast'
// import { useState } from "react";

const App = () => {
  // const addContact = (data) => {
  //   if(duplicateName(data)) {
  //     return toast.error(`${data.name} is already in contacts!`)
  //   }

  //   const contact = {
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   }
   
  //   setContacts(prevState => [contact, ...prevState]);
  // };
//   const [number, setNumber] = useState(0)

// const readValue =(data)=> {
//       const value = {
//       // id: nanoid(),
//       numbers: data.number,
//       // height: data.height,
//       // margin: data.margin,
//     }
//     setNumber(value)
   
// }

  return (
    <div>
      <h1>Cross Stitch Calculator</h1>

      <Form/>
      <Toaster/>
    </div>
  );
};

export default App;
