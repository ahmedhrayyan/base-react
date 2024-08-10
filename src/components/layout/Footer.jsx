import { useMemo } from "react";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return <footer>Copyrights {year} all rights reserbed</footer>;
}
