import './styles.scss';
import EpicureSymbol from '../../assets/icons/epicure_symbol.png';
import { Button } from '../Button/Button';
import { NAVBAR } from '../../resources/content';
export const Navbar = () => {
  

  return (
    <header className="navbar">
        <img src={EpicureSymbol} className='symbol'/>
        <h3 className='title'>{NAVBAR.TITLE}</h3>
        <section className='button_container'>
            <Button style='navbar_button'>{NAVBAR.RESTAURANTS}</Button>
            <Button style='navbar_button'>{NAVBAR.CHEFS}</Button>
        </section>

        <section className='symbol_container'>

        </section>

    </header>
  );
};