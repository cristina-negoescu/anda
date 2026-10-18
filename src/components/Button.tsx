import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Button({
  to = '/contact',
  children = 'Solicită o programare',
  light = false,
}: {
  to?: string;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`button ${light ? 'light' : ''}`} to={to}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
