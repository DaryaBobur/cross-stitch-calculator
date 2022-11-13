import Form from "../Form/Form";
import { Toaster } from 'react-hot-toast'
import { useState } from "react";
import InfoEmbroidery from "../InfoEmbroidery/InfoEmbroidery";
import { Title, Container, Wrap } from "./AppStyled";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

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
    // <ThemeProvider theme={darkTheme}>
    //     <CssBaseline />
    <Container>
      <Wrap>
      <Title>Калькулятор канви</Title>
      <Form onSubmit={sizeEmbroidery}/>
      {sizeWork && <InfoEmbroidery size={sizeWork}/>}
      </Wrap>
      <Toaster/>
    </Container>
    // </ThemeProvider>
  );
};

export default App;

