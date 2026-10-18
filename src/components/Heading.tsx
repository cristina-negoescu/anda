import type { ReactNode } from 'react';

export function Heading({
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}
