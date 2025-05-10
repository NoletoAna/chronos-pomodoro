import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

// PascalCase 'ExeploDeComponente': primeira letra de cada palavra maiúscula
export function App() {
    console.log('oi');

    return (
        <div>
            <Heading/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore unde nesciunt ex fugiat omnis earum numquam, sed iste nobis iusto ratione aperiam totam voluptatem optio nihil incidunt recusandae dicta!</p>
        </div>
    );
}

// ao usar o export default, o import pode ter qualquer nome
// export default App;