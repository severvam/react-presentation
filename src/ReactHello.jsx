import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const ReactHello = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo'/>
                <div><Link to='/demo1'>Demo1</Link></div>
                <div><Link to='/demo2'>Demo2</Link></div>
                <div><Link to='/demo4'>Demo4</Link></div>
            </header>
        </div>
    );
};

export default ReactHello;
