import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  // useLocation bizə hazırkı URL-i verir (məsələn: /store, /workouts)
  const { pathname } = useLocation();

  useEffect(() => {
    // Hər dəfə 'pathname' dəyişəndə bu kod işə düşür:
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" qoysan yavaş-yavaş qalxar (zövq məsələsi)
    });
  }, [pathname]); // <-- Bu massiv (dependency array) çox vacibdir
};

export default useScrollTop;