'use client';
import { ThemeContext, ThemeContextDto } from '@/context/ThemeContext';
import { useContext } from 'react';
import './DarkModeSwitch.scss';

type Props = {};

function DarkModeSwitch({}: Props) {
  const { toggle, mode } = useContext(ThemeContext) as ThemeContextDto;
  const handleToggleSwitch = () => {
    // setIsSwitched(!isSwitched);
    toggle();
  };
  return (
    <button
      className={['toggle', mode === 'dark' ? 'toggle--toggled' : ''].join(' ')}
      onClick={handleToggleSwitch}
      title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="toggle__sun">☀️</div>
      <div className="toggle__moon">🌛</div>
      <div className="toggle__thumb"></div>
    </button>
  );
}

export default DarkModeSwitch;
