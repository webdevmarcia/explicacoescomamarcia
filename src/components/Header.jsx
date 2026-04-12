import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="flex items-center justify-between h-20 bg-white sticky top-0 z-50 w-full shadow-md">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Logo Explicações com a Márcia" 
            className="w-12 h-12 object-contain"
          />

          <span className="text-lg font-extrabold tracking-tighter text-[var(--blue)]">
            Explicações com a Márcia
          </span>
        </a>

        {/* ÍCONE HAMBÚRGUER */}
        <button
          aria-label="Abrir menu"
          className="md:hidden flex flex-col gap-1.5 ml-2"
          onClick={() => setOpen(true)}
        >
          <span className="w-7 h-0.5 bg-[var(--blue)] rounded"></span>
          <span className="w-7 h-0.5 bg-[var(--blue)] rounded"></span>
          <span className="w-7 h-0.5 bg-[var(--blue)] rounded"></span>
        </button>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-[var(--blue)] hover:text-[var(--orange)] transition"
          >
            Serviços
          </a>

          <a
            href="#contatos"
            className="text-[var(--blue)] hover:text-[var(--orange)] transition"
          >
            Contatos
          </a>
        </nav>
      </div>

      {/* MENU FULLSCREEN */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex justify-end">
          <div
            ref={menuRef}
            className="w-72 h-full bg-[var(--laranja)] shadow-xl p-8 flex flex-col gap-8 animate-slideLeft"
          >
            {/* BOTÃO FECHAR */}
            <button
              aria-label="Fechar menu"
              className="self-end text-3xl hover:text-[var(--blue)] transition"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            {/* NAV MOBILE */}
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              <a
                href="#servicos"
                onClick={() => setOpen(false)}
                className="hover:text-[var(--blue)] transition"
              >
                Serviços
              </a>

              <a
                href="#contatos"
                onClick={() => setOpen(false)}
                className="hover:text-[var(--blue)] transition"
              >
                Contatos
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
