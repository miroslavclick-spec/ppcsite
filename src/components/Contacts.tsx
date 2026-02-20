import { useTranslations } from 'next-intl';
import styles from './Contacts.module.css';

export default function Contacts() {
    const t = useTranslations('Contacts');

    return (
        <section id="contacts" className={`section ${styles.contacts}`}>
            <div className="container">
                <h2 className="section-title">{t('section_title')}</h2>

                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{t('title')}</h3>
                        <p className={styles.desc}>{t('desc')}</p>

                        <div className={styles.links}>
                            <a href="#" className={styles.link}>
                                <span className={styles.icon}>📱</span> Telegram
                            </a>
                            <a href="#" className={styles.link}>
                                <span className={styles.icon}>💬</span> Viber
                            </a>
                            <a href="#" className={styles.link}>
                                <span className={styles.icon}>📞</span> WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">{t('form.name')}</label>
                                <input type="text" id="name" placeholder={t('form.name_placeholder')} className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">{t('form.phone')}</label>
                                <input type="tel" id="phone" placeholder={t('form.phone_placeholder')} className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">{t('form.message')}</label>
                                <textarea id="message" rows={4} placeholder={t('form.message_placeholder')} className={styles.input}></textarea>
                            </div>
                            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                {t('form.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
