import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  // PARALLAX DO SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="
        relative 
        min-h-screen
        flex items-center justify-center 
        px-6 pt-20 pb-0
        overflow-hidden
      "
    >
      {/* LUZ CINEMATOGRÁFICA */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-[120px] opacity-70"
      />

      {/* GRÃO SUAVE */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/grain.png')] mix-blend-soft-light pointer-events-none"></div>

      {/* CONTEÚDO */}
      <div className="animate-cineFade relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">

        {/* IMAGEM AO LADO */}
        <motion.img
          src="/meninos.png"
          alt="Explicações"
          style={{ y: yImage }}
          className="
            w-full h-auto rounded-2xl shadow-2xl 
            object-cover border border-white/10
          "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* TEXTO COM PARALLAX */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 text-center md:text-left"
        >
          <span className="inline-block px-3 py-1 bg-[var(--orange)] text-white text-xs font-bold uppercase tracking-wider rounded-full w-fit">
            Apoio Personalizado
          </span>

          <h1 className="text-3xl md:text-6xl font-extrabold text-[var(--blue)] tracking-tight leading-[1.1]">
            O sucesso académico está ao teu alcance!
          </h1>

          <p className="text-[var(--blue)] text-lg leading-relaxed">
            Explicações ao domicílio e online a preços acessíveis. Aprende ao teu ritmo com uma tutora experiente e alcança as notas que sempre desejaste.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contatos"
            className="
              inline-block px-8 py-3 rounded-full font-semibold text-lg
              bg-[var(--orange)] text-white
              shadow-lg shadow-primary/30
            "
          >
            Marcar uma sessão
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
