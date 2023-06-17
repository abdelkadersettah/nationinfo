import Nav from '../Nav/Nav';
import './Header.scss';

type Props = {};

function Header({}: Props) {
  return (
    <header className="header w-full px-4 py-2">
      <Nav />
    </header>
  );
}

export default Header;
