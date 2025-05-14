import './styles/theme.css';
import './styles/global.css';
import Container from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import CountDown from './components/CountDown';
import Input from './components/Input/input';
import Cycles from './components/Cycles/index';
import Button from './components/Button/Button';
import { CirclePlay } from 'lucide-react';
import { StopCircle } from 'lucide-react';
import Footer from './components/Footer/Footer';


// PascalCase 'ExeploDeComponente': primeira letra de cada palavra maiúscula
export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Menu />
			</Container>
			<Container>
				<CountDown />
			</Container>
			<Container>
				<form action="" className='form'>
					<div className="formRow">
						<Input label="Task:" type='string' id='input' />
					</div>
					<div className="formRow">
						<p>Lorem ipsum dolor sit.</p>
					</div>
					<div className="formRow">
						<Cycles />
					</div>
					<div className="formRow">
						<Button icon={<CirclePlay />} />
					</div>
				</form>
			</Container>
			<Container>
				<Footer/>
			</Container>
		</>
	);
}

// ao usar o export default, o import pode ter qualquer nome
// export default App;