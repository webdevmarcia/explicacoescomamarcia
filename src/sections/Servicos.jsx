export default function Servicos() {
  return (
    <>
      {/* Secção dos serviços */}
      <section
        id="servicos"
        className="w-full px-4 py-16 bg-[var(--gray)]"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-[var(--blue)] text-3xl font-bold leading-tight">
            Serviços
          </h2>

          <div className="h-1 w-20 bg-[var(--orange)] mt-2 rounded-full"></div>
          <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>

          <p className="mt-4 text-[var(--blue)] max-w-2xl">
            Apoio especializado adaptado a cada etapa do percurso académico.
          </p>
        </div>

          {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Serviço 1 */}
  <div className="animate-cineFade group bg-white p-6 rounded-2xl shadow-sm border border-[var(--white)] transition-all hover:shadow-xl">
    <div
      className="w-full aspect-[4/3] bg-cover bg-center rounded-xl mb-4 overflow-hidden"
      style={{
        backgroundImage: 'url("primaria.png")',
      }}
    ></div>

    <h3 className="text-slate-900 text-xl font-bold mb-2 transition-colors group-hover:text-[var(--orange)]">
      2º e 3º ciclo
    </h3>

    <p className="text-[var(--bluey)] text-sm mb-4">
      Acompanhamento do 5º ao 9º ano. Foco na criação de bases sólidas e métodos de estudo.
    </p>
  </div>

  {/* Serviço 2 */}
  <div className="animate-cineFade group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[var(--white)]">
    <div
      className="w-full aspect-[4/3] bg-cover bg-center rounded-xl mb-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/secundaria.png")',
      }}
    ></div>

    <h3 className="text-slate-900 text-xl font-bold mb-2 transition-colors group-hover:text-[var(--orange)]">
      Ensino Secundário
    </h3>

    <p className="text-[var(--bluey)] text-sm mb-4">
      Preparação intensiva para exames nacionais e apoio específico em diversas disciplinas.
    </p>
  </div>

  {/* Serviço 3 */}
  <div className="animate-cineFade group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-[var(--white)]">
    <div
      className="w-full aspect-[4/3] bg-cover bg-center rounded-xl mb-4 overflow-hidden"
      style={{
        backgroundImage: 'url("/uni.png")',
      }}
    ></div>

    <h3 className="text-slate-900 text-xl font-bold mb-2 transition-colors group-hover:text-[var(--orange)]">
      Ensino Superior
    </h3>

    <p className="text-[var(--bluey)] text-sm mb-4">
      Apoio em cadeiras específicas, elaboração de teses, monografias e projetos.
    </p>
  </div>

</div>

       

      {/* Disciplinas */}
      <div className="px-4 pt-8 animate-cineFade">
        <div className="grid grid-cols-2 @[480px]:grid-cols-4 gap-4">

          {/* Matemática */}
          <div className="bg-[var(--white)] text-[var(--blue)] p-4 rounded-xl shadow-sm border border-[var(--white)] flex flex-col items-center text-center gap-3">
            <div className="bg-[var(--gray)] p-3 rounded-full text-[var(--orange)]">
              <span className="material-symbols-outlined text-primary">functions</span>
            </div>
            <p className="text-[var(--blue)] text-sm font-bold">Matemática</p>
          </div>

          {/* FQ */}
          <div className="bg-[var(--white)] text-[var(--blue)] p-4 rounded-xl shadow-sm border border-[var(--white)] flex flex-col items-center text-center gap-3">
            <div className="bg-[var(--gray)] p-3 rounded-full text-[var(--orange)]">
              <span className="material-symbols-outlined text-primary">science</span>
            </div>
            <p className="text-[var(--blue)] text-sm font-bold">Física/Química</p>
          </div>

          {/* Apoio */}
          <div className="bg-[var(--white)] text-[var(--blue)] p-4 rounded-xl shadow-sm border border-[var(--white)] flex flex-col items-center text-center gap-3">
            <div className="bg-[var(--gray)] p-3 rounded-full text-[var(--orange)]">
              <span className="material-symbols-outlined text-primary">history_edu</span>
            </div>
            <p className="text-[var(--blue)] text-sm font-bold">Apoio</p>
          </div>

          {/* Inglês/Francês */}
          <div className="bg-[var(--white)] text-[var(--blue)] p-4 rounded-xl shadow-sm border border-[var(--white)] flex flex-col items-center text-center gap-3">
            <div className="bg-[var(--gray)] p-3 rounded-full text-[var(--orange)]">
              <span className="material-symbols-outlined text-primary">translate</span>
            </div>
            <p className="text-[var(--blue)] text-sm font-bold">Inglês/Francês</p>
          </div>
        </div>
      </div>

      {/* Aulas */}
      <div className="px-4 pt-10 bg-[var(--gray)] animate-cineFade">
        <div className="flex flex-col gap-4">

          {/* Online */}
          <div className="bg-[var(--white)] p-5 rounded-xl border-l-4 border-[var(--orange)] shadow-sm">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-3xl text-[var(--orange)]">devices</span>

              <div>
                <h3 className="text-[var(--blue)] font-bold text-lg mb-1">
                  Sessões Online
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Aulas interativas via Google Meet. Flexibilidade total de horários no conforto da tua casa.
                </p>
              </div>
            </div>
          </div>

          {/* Presencial */}
          <div className="animate-cineFade bg-[var(--white)] p-5 rounded-xl border-l-4 border-[var(--orange)] shadow-sm">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-3xl text-[var(--orange)]">groups</span>

              <div>
                <h3 className="text-[var(--blue)] font-bold text-lg mb-1">
                  Sessões Presenciais
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Explicações presenciais no domicílio ou numa biblioteca próxima da tua residência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Preparação Exames */}
      <div className="px-4 pt-10 pb-8 animate-cineFade">
        <div className="bg-[var(--gray)] p-6 rounded-2xl border border-[var(--orange)]">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--orange)] text-white p-2 rounded-lg">
              <span className="material-symbols-outlined">assignment_turned_in</span>
            </div>

            <div>
              <h3 className="text-[var(--blue)] font-bold text-xl mb-2">
                Preparação para Exames Nacionais
              </h3>

              <p className="text-[var(--bluey)] text-sm leading-relaxed mb-4">
                Focamos na resolução de exames de anos anteriores, gestão de tempo e estratégias de resposta para garantir que chegas ao dia do exame com total confiança.
              </p>
            </div>
          </div>
        </div>
      </div>

</section>   {/* ← FECHA O SECTION ANTERIOR */}

      {/* Porque escolher */}
<section className="px-4 py-16">

  <div className="flex flex-col lg:flex-row gap-12 items-center animate-cineFade">

    {/* Texto */}
    <div className="lg:w-1/2 space-y-8">
      <h2 className="text-[var(--blue)] text-3xl font-bold leading-tight">
        Porquê escolher ter explicações com a Márcia?
      </h2>

      <div className="grid grid-cols-1 gap-6">

        {/* Item 1 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[var(--laranja)] text-[var(--orange)] rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">person_check</span>
          </div>

          <div>
            <h4 className="font-bold text-[var(--blue)]">Explicadora Qualificada</h4>
            <p className="text-slate-600 text-sm">Profissional com experiência pedagógica comprovada.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[var(--laranja)] text-[var(--orange)] rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">home_work</span>
          </div>

          <div>
            <h4 className="font-bold text-[var(--blue)]">Flexibilidade Total</h4>
            <p className="text-slate-600 text-sm">
              Escolhe entre aulas presenciais no teu domicílio, numa biblioteca ou sessões online interativas.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[var(--laranja)] text-[var(--orange)] rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">trending_up</span>
          </div>

          <div>
            <h4 className="font-bold text-[var(--blue)]">Resultados Visíveis</h4>
            <p className="text-slate-600 text-sm">
              95% dos meus alunos melhoraram as suas notas logo no primeiro período.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Testemunho */}
    <div className="lg:w-1/2 relative">
      <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30"></div>

      <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-[var(--orange)]">
        <div className="flex items-center gap-4 mb-6">
          <img
            alt="Testemunho de Maria Silva"
            className="w-16 h-16 rounded-full object-cover border-2 border-[var(--orange)]"
            src="/maria.png"
          />

          <div>
            <h5 className="font-bold">Maria Silva</h5>
            <p className="text-xs text-slate-500">Mãe do Tiago (8º Ano)</p>
          </div>
        </div>

        <p className="italic text-slate-600 leading-relaxed">
          "A Márcia é dedicada e demonstra responsabilidade no seu trabalho, explica os conteúdos de forma clara e com paciência. Mostra-se sempre disponível para ajudar, e durante as aulas, cria um ambiente tranquilo, facilitando a aprendizagem."
        </p>

        <div className="flex gap-1 mt-4 text-[var(--orange)]">
          <span className="material-symbols-outlined text-sm">star</span>
          <span className="material-symbols-outlined text-sm">star</span>
          <span className="material-symbols-outlined text-sm">star</span>
          <span className="material-symbols-outlined text-sm">star</span>
          <span className="material-symbols-outlined text-sm">star</span>
        </div>
      </div>
    </div>

  </div>
</section>

    </>
  );
}
