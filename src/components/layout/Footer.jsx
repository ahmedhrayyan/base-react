import { useMemo } from "react";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="text-xs text-center">
      Copyrights {year} all rights reserbed
    </footer>
  );
}
