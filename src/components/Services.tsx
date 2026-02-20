import { useTranslations } from 'next-intl';
import styles from './Services.module.css';

export default function Services() {
    const t = useTranslations('Services');

    const services = [
        { key: 'setup', icon: '🚀' },
        { key: 'audit', icon: '🔍' },
        { key: 'management', icon: '📈' },
        { key: 'local', icon: '📍' }
    ];

    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <h2 className={`section-title ${styles.title}`}>{t('section_title')}</h2>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.key} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{service.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{t(`${service.key}.title`)}</h3>
                            <p className={styles.cardDesc}>{t(`${service.key}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
