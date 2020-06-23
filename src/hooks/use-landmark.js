import { useState, useEffect } from 'react';
import { slugify } from 'utils';

const useLandmark = ({ containerRef, markSelector }) => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    if (containerRef?.current) {
      // get all marks of a parent
      const allMarks = containerRef.current.querySelectorAll(markSelector);

      setLinks(
        Array.from(allMarks).map(({ id, innerHTML }) => ({
          title: innerHTML,
          anchor:
            id ||
            `#${slugify(innerHTML)
              .replace(/\//g, '-')
              .replace(/^\d+/g, '')
              .replace(/^-*/g, '')
              .replace(/-*$/g, '')}`,
        })),
      );
    }
  }, []);
  return links;
};
export default useLandmark;