'use client';
import { ThemeContext, ThemeContextDto } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import NationLogoWhite from '../../../public/nationinfo-logo-slug-white.png';
import NationLogo from '../../../public/nationinfo-logo-slug.png';
import DarkModeSwitch from '../Buttons/DarkModeSwitch/DarkModeSwitch';
import './Nav.scss';

type Props = {};

function Nav({}: Props) {
  const { mode } = useContext(ThemeContext) as ThemeContextDto;

  return (
    <nav className="nav flex items-center justify-between">
      <Link href={'/'}>
        {mode === 'light' ? (
          <Image
            src={NationLogo}
            alt="NationInfo logo"
            width={144}
            height={49}
            priority={true}
            className="h-49 w-36"
          />
        ) : (
          <Image
            src={NationLogoWhite}
            alt="NationInfo logo"
            width={144}
            height={49}
            priority={true}
            className="h-49 w-36"
          />
        )}
      </Link>
      <DarkModeSwitch />
    </nav>
  );
}

export default Nav;
