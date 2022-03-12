import { TagProps } from "./HashTags.props";
import styles from './HashTags.module.css';
import cn from 'classnames';

export const HashTags = ({ size = 'sm', children, href, color = 'ghost', className, ...props }: TagProps): JSX.Element => {
	return (
		<div className={cn(styles.tag, className, {
			[styles.sm]: size == 'sm',
			[styles.md]: size == 'md',
			[styles.primary]: color == 'primary',
			[styles.green]: color == 'green',
			[styles.gray]: color == 'gray',
			[styles.red]: color == 'red',
			[styles.ghost]: color == 'ghost',
		})} {...props}>{
				href ? <a href={href}>{children}</a> : <>{children}</>
			}</div>
	);
};