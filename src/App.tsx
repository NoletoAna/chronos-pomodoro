import './styles/theme.css';
import './styles/global.css';

// PascalCase 'ExeploDeComponente': primeira letra de cada palavra maiúscula
export function App() {
    console.log('oi');

    return (
        <>
            <div className='container'>
                <div className='content'>
                    <section>LOGO</section>
                </div>
            </div>

            <div className='container'>
                <div className='content'>
                    <section>MENU</section>
                </div>
            </div>

            <div className='container'>
                <div className='content'>
                    <section>FORM</section>
                </div>
            </div>

            <div className='container'>
                <div className='content'>
                    <section>FOOTER</section>
                </div>
            </div>
        </>
    );
}

// ao usar o export default, o import pode ter qualquer nome
// export default App;