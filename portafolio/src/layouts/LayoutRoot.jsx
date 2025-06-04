import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function LayoutRoot({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition ${
          scrolled ? "bg-white/70 backdrop-blur dark:bg-zinc-900/70" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <Link to="/" className="font-bold text-xl">
            MiPortafolio
          </Link>
          <ul className="flex gap-6">
            {[
              { to: "/", label: "Inicio", exact: true },
              { to: "/portfolio", label: "Proyectos" },
              { to: "/about", label: "Sobre mí" },
              { to: "/contact", label: "Contacto" },
            ].map(({ to, label, exact }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : "text-zinc-600 dark:text-zinc-300"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>

      <main className="pt-16">{children}</main>

      <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} MiPortafolio. Todos los derechos reservados.
      </footer>
    </>
  );
}