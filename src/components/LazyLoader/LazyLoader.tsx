import { FC, useRef, useEffect } from "react";
import { LazyLoaderProps } from '../../types/types';

export const LazyLoader: FC<LazyLoaderProps> = ({ src, alt }) => {
  const ref = useRef(null);
  const io = useRef(null);

  useEffect(() => {
    if (ref.current) {
      io.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.5) {
              ref.current.src = src;
              io.current.unobserve(ref.current);
            }
          });
        },
        {
          threshold: [0, 0.5, 1]
        }
      );

      io.current.observe(ref.current);
    }

    return () => {
      io.current.unobserve(ref.current);
    };
  }, [ref]);

  return <img ref={ref} srcalt={alt} />;
};
