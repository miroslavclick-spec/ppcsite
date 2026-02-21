'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { sendGTMEvent } from '@next/third-parties/google';
import styles from './Contacts.module.css';

export default function Contacts() {
    const t = useTranslations('Contacts');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
                sendGTMEvent({ event: 'submit_form' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contacts" className={`section ${styles.contacts}`}>
            <div className="container">
                <h2 className="section-title">{t('section_title')}</h2>

                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <div className={styles.profile}>
                            <Image
                                src="/фото0.jpeg"
                                alt="Profile Photo"
                                width={120}
                                height={120}
                                className={styles.profileImage}
                            />
                            <div className={styles.profileText}>
                                <h3 className={styles.title}>{t('title')}</h3>
                                <p className={styles.desc}>{t('desc')}</p>
                            </div>
                        </div>

                        <div className={styles.links}>
                            <a href="https://t.me/papaclick" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <span className={styles.icon}>📱</span> Telegram
                            </a>
                            <a href="https://wa.me/380501489212" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <span className={styles.icon}>📞</span> WhatsApp
                            </a>
                            <a href="viber://chat?number=%2B380501489212" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <span className={styles.icon}>💬</span> Viber
                            </a>
                            <a href="https://www.linkedin.com/in/myroslav-samokhvalov-433705159/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <span className={styles.icon}>💼</span> LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">{t('form.name')}</label>
                                <input type="text" id="name" name="name" required placeholder={t('form.name_placeholder')} className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">{t('form.phone')}</label>
                                <input type="tel" id="phone" name="phone" required placeholder={t('form.phone_placeholder')} className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">{t('form.message')}</label>
                                <textarea id="message" name="message" rows={4} placeholder={t('form.message_placeholder')} className={styles.input}></textarea>
                            </div>
                            <button type="submit" disabled={status === 'loading'} className={`btn btn-primary ${styles.submitBtn}`}>
                                {status === 'loading' ? t('form.sending') : t('form.submit')}
                            </button>
                            {status === 'success' && <div className={styles.successMessage}>{t('form.success')}</div>}
                            {status === 'error' && <div className={styles.errorMessage}>{t('form.error')}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
