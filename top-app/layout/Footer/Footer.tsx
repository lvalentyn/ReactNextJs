import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)}{...props}>
			<div className={styles.copy}>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<a href="#" aria-label="agrees" target="_blank" className={styles.link}>Пользовательское соглашение</a>
			<a href="#" aria-label="confindent" target="_blank" className={styles.link}>Политика конфиденциальности</a>
		</footer>
	);
};