import { PProps } from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';


export const P = ({ fontSize = 'sm', children, className, ...props }: PProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, {
			[styles.sm]: fontSize == 'sm',
			[styles.md]: fontSize == 'md',
			[styles.lg]: fontSize == 'lg',
		})} {...props}>{children}</p>
	);
};