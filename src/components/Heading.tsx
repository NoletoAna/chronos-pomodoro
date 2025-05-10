// ".module" permite criar uma variável para pegar o valor das classes que estão no arquivo CSS
// para cada componente, o CSS é escopado através da mudança no nome da classe, ou seja, não tem como sobrescrever o CSS de outro componente
import styles from './Heading.module.css';

export function Heading() {
    // usando o modulo importado, podemos usar a classe que está no arquivo CSS
    return <h1 className={styles.heading}>Olá Mundo!</h1>
}