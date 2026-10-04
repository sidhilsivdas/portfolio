import {useEffect} from 'react';

/**
 * Scroll reveal: marks every [data-reveal] element with data-revealed once it enters the viewport.
 * All the motion itself lives in CSS (styles/motion.scss); this only flips an attribute, once per element.
 */
const useReveal = () => {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    document.documentElement.classList.add('js-reveal');
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            observer.unobserve(entry.target);
          }
        }),
      {rootMargin: '0px 0px -10% 0px'},
    );
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
};

export default useReveal;
