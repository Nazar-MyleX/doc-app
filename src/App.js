import styled from '@emotion/styled'
import Navbar from './components/Navbar';
import PDFForm from './components/PDFForm';

const Container = styled.div`
  display: flex;
`

const App = () => {
    return (
        <Container>
            <Navbar />
            <PDFForm />
        </Container>
    );
}

export default App;
