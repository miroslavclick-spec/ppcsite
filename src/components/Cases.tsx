import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Cases.module.css';

export default function Cases() {
    const t = useTranslations('Cases');

    const cases = [
        { key: 'case_1', image: '/фото1.jpeg' },
        { key: 'case_2', image: '/фото2.jpeg' },
        { key: 'case_3', image: '/фото3.jpeg' },
        { key: 'case_4', image: '/фото4.jpeg' },
    ];

    return (
        <section id="cases" className={`section ${styles.cases}`}>
            <div className="container">
                <h2 className="section-title">{t('section_title')}</h2>

                <div className={styles.grid}>
                    {cases.map((c) => (
                        <div key={c.key} className={styles.card}>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{t(`${c.key}.title`)}</h3>
                                <p className={styles.desc}>{t(`${c.key}.desc`)}</p>
                                <div className={styles.metrics}>
                                    <div className={styles.metric}>
                                        <span className={styles.metricValue}>{t(`${c.key}.metric1_val`)}</span>
                                        <span className={styles.metricLabel}>{t(`${c.key}.metric1_label`)}</span>
                                    </div>
                                    <div className={styles.metric}>
                                        <span className={styles.metricValue}>{t(`${c.key}.metric2_val`)}</span>
                                        <span className={styles.metricLabel}>{t(`${c.key}.metric2_label`)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={c.image}
                                    alt={t(`${c.key}.title`)}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
