import { useEffect, useState, useRef } from "react";

function useIntersectionObserver(options) {
  const [intersectionEntries, setIntersectionEntries] = useState([]);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      setIntersectionEntries(entries);

      entries.forEach((entrie) => {
        entrie.target.classList.add("animate__animated", "animate__backInUp");
      });
    }, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [observe]);

  function observe(element) {
    if (observer.current && element) {
      observer.current.observe(element);
      return () => {
        observer.current.unobserve(element);
      };
    }
  }

  return [observe, intersectionEntries];
}

export default useIntersectionObserver;
