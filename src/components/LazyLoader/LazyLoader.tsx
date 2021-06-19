import { FC, useRef, useEffect } from "react";
import { LazyLoaderProps } from '../../types/types';
import { CharacterImage } from './LazyLoader.styles';

export const LazyLoader: FC<LazyLoaderProps> = ({ src, alt }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              ref?.current?.setAttribute('src', src);
              ref?.current?.setAttribute('alt', alt);
              observer.unobserve(ref.current!);
            }
          });
        },
        {
          threshold: [0, 0.5, 1]
        }
      );

      observer.observe(ref.current!);
    }
  }, [ref]);

  return <CharacterImage ref={ref} />;
};