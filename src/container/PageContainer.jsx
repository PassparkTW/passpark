
import Navbar from './Navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


const PageContainer = ({ children }) => {
    return (
      <Container>
        <Navbar />
        {children}
      </Container>

    )
}

export default PageContainer