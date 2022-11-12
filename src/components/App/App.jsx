import Form from "../Form/Form";
import { Toaster } from 'react-hot-toast'
import { useState } from "react";
import InfoEmbroidery from "../InfoEmbroidery";
import { Title, Container } from "./AppStyled";


const App = () => {

  const [sizeWork, setSizeWork] = useState('')
  const sizeEmbroidery = (data) => {
    console.log(data)
  const stitch = {
    width: data.widthStitch,
    height: data.heightStitch,
    margin: data.marginStitch,
    size: data.size,
    amountYarn: data.amountYarn,
  }  
  setSizeWork(stitch)
  }

  return (
    <Container>
      <Title>Калькулятор канви</Title>

      <Form onSubmit={sizeEmbroidery}/>
      {sizeWork && <InfoEmbroidery size={sizeWork}/>}
      <Toaster/>
    </Container>
  );
};

export default App;
