import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

type ButtonProps = {
  children: ReactNode;
  variant: 'primary';
  type: 'button' | 'submit' | 'reset';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  variant = 'primary',
  type = 'button',
}: ButtonProps) {
  const classNames = `btn ${variant}`;

  return (
    <div className="Button">
      <button type={type ? 'button' : 'submit'} className={classNames}>
        {children}
      </button>
    </div>
  );
}

export default Button;
