import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--white)] text-[var(--blue)] py-12 px-4">
      <div className="animate-cineFade max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + descrição */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-xl font-bold">Explicações com a Márcia</h2>
            </a>
          </div>

          <p className="text-sm">
            Agende uma sessão e alcance o sucesso académico!
          </p>
        </div>

        {/* Contatos */}
        <div>
          <h4 className="font-bold mb-4">Contatos</h4>

          <ul className="text-[var(--blue)] text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs text-[var(--orange)]">mail</span>
              marciadiascosta326@gmail.com
            </li>

            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs text-[var(--orange)]">phone</span>
              +351 932 663 895
            </li>

            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs text-[var(--orange)]">location_on</span>
              Margem Sul, Portugal
            </li>
          </ul>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="max-w-7xl mx-auto border-t mt-12 pt-8 text-center text-[var(--blue)] text-xs">
        © 2026 Explicações com a Márcia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
