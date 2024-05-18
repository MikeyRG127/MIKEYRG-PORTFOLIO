
import HeroContent from '../../components/HeroContent';
import { getDictionary } from './dictionaries'

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) // en
  return (
    <>
      <HeroContent dict={dict.home}></HeroContent>
    </>
  );
}




