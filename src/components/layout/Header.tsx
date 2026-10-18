import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Brand } from '../Brand';
import { Button } from '../Button';
import { navigation } from '../../data/navigation';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <header>
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          aria-controls="navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          aria-label="Navigație principală"
          className={open ? 'open' : ''}
        >
          {navigation.map(({ path: to, title: label }) => (
            <NavLink key={to} to={to} end>
              {label}
            </NavLink>
          ))}
          <Button>Hai să vorbim</Button>
        </nav>
      </div>
    </header>
  );
}
