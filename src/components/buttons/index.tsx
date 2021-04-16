import { ReactChild, ReactChildren, ReactNode } from 'react';
import styles from '../../styles/buttons.module.css'
import classNames from 'classnames';

interface ButtonProps {
  onClick: any;
  children?: ReactNode | ReactNode[] | ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | string;
  label?: ReactNode | ReactNode[] | ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | string;
  className?: string;
}

const Button = ({ onClick, children, label, className }: ButtonProps) => (<button
  className={classNames(styles.button, className)} onClick={onClick}>{children || label}</button>);

export const CancelButton = (props: ButtonProps) => <Button className={styles.cancel} {...props} />;
export const ValidateButton = (props: ButtonProps) => <Button className={styles.validate} {...props} />;

export default Button;
