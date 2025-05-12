import './styles/theme.css';
import './styles/global.css';
import Container from './components/Container';

// PascalCase 'ExeploDeComponente': primeira letra de cada palavra maiúscula
export function App() {
    return (
        <>
            <Container>Logo</Container>
            <Container>Menu</Container>
            <Container>Form</Container>
            <Container>Footer</Container>
        </>
    );
}

// ao usar o export default, o import pode ter qualquer nome
// export default App;