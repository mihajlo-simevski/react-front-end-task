import { ReactNode } from 'react';
import './MainLayout.scss';

type MainContentProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainContentProps) {
  return <section className="MainLayout">{children}</section>;
}
