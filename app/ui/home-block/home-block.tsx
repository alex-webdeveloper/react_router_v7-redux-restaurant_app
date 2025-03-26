import styles from './home-block.module.scss';

export default function HomeBlock() {

	return (
        <div className={styles['home-content']}>
			<section className={styles['home-content__hero']}>
				<div className={styles['home-content__hero-content']}>
					<h1 className={styles['home-content__hero-title']}>
						Welcome to La Bella Italia
					</h1>
					<p className={styles['home-content__hero-subtitle']}>
						Authentic Italian cuisine in the heart of the city
					</p>
				</div>
			</section>

			<section className={styles.features}>
				<div className={styles['features__feature-card']}>
					<h3>Fresh Ingredients</h3>
					<p>
						Daily delivered produce from local suppliers
					</p>
				</div>
				<div className={styles['features__feature-card']}>
					<h3>Master Chef</h3>
					<p>
						Dishes prepared by an Italian cuisine expert with 20 years of experience
					</p>
				</div>
				<div className={styles['features__feature-card']}>
					<h3>Signature Recipes</h3>
					<p>Unique flavor combinations from family recipes</p>
				</div>
			</section>
		</div>
	);
}
