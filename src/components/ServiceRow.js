import { Row } from "./Row";
import styles from "styles/components/ServiceRow.module.scss";
import { CheckList } from "./CheckList";
import clsx from "clsx";

export const ServiceRow = ({
	imgSrc,
	title,
	content,
	listItems,
	variant,
	...props
}) => {
	return (
		<Row
			className={clsx(
				styles.service_row__row,
				variant && styles[`service_row--${variant}`]
			)}
			verticalAlign="middle"
			narrow
			{...props}
		>
			<div className={styles.service_row__image_container}>
				<img src={imgSrc} className={styles.service_row__image} />
			</div>

			<div className="typography">
				<h3 className={styles.service_row__title}>{title}</h3>

				{content && <>{content}<br/></>}

				<CheckList listItems={listItems} />
			</div>
		</Row>
	);
};
