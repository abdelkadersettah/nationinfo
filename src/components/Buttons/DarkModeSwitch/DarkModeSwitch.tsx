'use client';
import { ThemeContext, ThemeContextDto } from '@/context/ThemeContext';
import { useContext, useState } from 'react';
import './DarkModeSwitch.scss';

type Props = {};

function DarkModeSwitch({}: Props) {
  const { toggle } = useContext(ThemeContext) as ThemeContextDto;
  const [isSwitched, setIsSwitched] = useState(false);
  const handleToggleSwitch = () => {
    setIsSwitched(!isSwitched);
    toggle();
  };
  return (
    <button
      className={['toggle', isSwitched ? 'toggle--toggled' : ''].join(' ')}
      onClick={handleToggleSwitch}
      title={isSwitched ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="toggle__moon">🌛</div>
      <div className="toggle__sun">☀️</div>
      <div className="toggle__thumb"></div>
    </button>
  );
}

export default DarkModeSwitch;
