import Form from "./Form/Form";
import { Toaster } from 'react-hot-toast'
import { useState } from "react";
import InfoEmbroidery from "./InfoEmbroidery";
const App = () => {

  const [sizeWork, setSizeWork] = useState('')
  const sizeEmbroidery = (data) => {
    console.log(data)
  const stitch = {
    width: data.widthStitch,
    height: data.heightStitch,
    margin: data.marginStitch,
    size: data.size,
  }  
  setSizeWork(stitch)
  }

  return (
    <div>
      <h1>Cross Stitch Calculator</h1>

      <Form onSubmit={sizeEmbroidery}/>
      {sizeWork && <InfoEmbroidery size={sizeWork}/>}
      <Toaster/>
    </div>
  );
};

export default App;
