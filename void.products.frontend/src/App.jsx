import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CreateProductPage from './pages/CreateProductPage';

function App() {

  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("snow", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/create' element={<CreateProductPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
