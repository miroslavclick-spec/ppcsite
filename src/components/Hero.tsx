import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{t('title')}</h1>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                    <div className={styles.actions}>
                        <a href="#contacts" className="btn btn-primary">
                            {t('cta_primary')}
                        </a>
                        <a href="#cases" className="btn btn-secondary">
                            {t('cta_secondary')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
