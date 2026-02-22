import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Cases from '@/components/Cases';
import Contacts from '@/components/Contacts';
import Faq from '@/components/Faq';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Cases />
      <Faq />
      <Contacts />
    </main>
  );
}
