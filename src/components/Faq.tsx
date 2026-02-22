'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Faq.module.css';

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

export default function Faq() {
    const t = useTranslations('Faq');
    const [openId, setOpenId] = useState<string | null>(null);

    const faqs: FaqItem[] = [
        { id: 'q1', question: t('q1.question'), answer: t('q1.answer') },
        { id: 'q2', question: t('q2.question'), answer: t('q2.answer') },
        { id: 'q3', question: t('q3.question'), answer: t('q3.answer') },
        { id: 'q4', question: t('q4.question'), answer: t('q4.answer') },
        { id: 'q5', question: t('q5.question'), answer: t('q5.answer') },
    ];

    const toggle = (id: string) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className={`section ${styles.faq}`} id="faq">
            <div className="container">
                <h2 className="section-title">{t('section_title')}</h2>
                <div className={styles.accordion}>
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div key={faq.id} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(faq.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>
                                    <span className={styles.icon}>+</span>
                                </button>
                                <div className={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
