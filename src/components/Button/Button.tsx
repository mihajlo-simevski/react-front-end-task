import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

type ButtonProps = {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
}: ButtonProps) {
  const classNames = `btn ${variant}`;

  return (
    <div className="Button">
      <button type={type ? 'button' : 'submit'} className={classNames} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
