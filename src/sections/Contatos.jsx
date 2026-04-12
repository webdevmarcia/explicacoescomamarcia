import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contatos() {
  const ref = useRef(null);

  // PARALLAX DO SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityGlow = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // SCRIPT PARA ENVIAR PARA WHATSAPP
  function sendToWhatsApp(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text =
      `Olá Márcia!%0A%0A` +
      `Gostaria de marcar uma explicação.%0A%0A` +
      `Nome: ${name}%0A` +
      `Telemóvel: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Disciplina: ${message}`;

    window.open(`https://wa.me/351932663895?text=${text}`, "_blank");
  }

  return (
    <section
  id="contatos"
  ref={ref}
  className="
    w-full 
    px-6 py-32 
    bg-[var(--laranja)] 
    relative overflow-hidden
    backdrop-blur-xl
    border border-[#f48c25]/20
    shadow-2xl
  "
>

      {/* Glow cinematográfico */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="absolute inset-0 bg-gradient-to-b from-[#f48c25]/20 via-transparent to-black/10 blur-3xl pointer-events-none"
      />

      <div className="w-full px-6 text-center space-y-12 relative z-10">


        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold tracking-tight text-slate-900"
        >
          Entrar em contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-slate-700 max-w-2xl mx-auto"
        >
          Tem dúvidas, quer marcar uma explicação ou saber mais sobre os meus métodos?
          Envie uma mensagem e responderei com toda a atenção.
        </motion.p>

        {/* FORMULÁRIO PREMIUM */}
<motion.form
  onSubmit={sendToWhatsApp}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.3 }}
  className="
    mt-16 
    w-full
    grid grid-cols-1 md:grid-cols-2 gap-3
    bg-[var(--gray)] p-4 rounded-xl
    border border-[#f48c25]/30 shadow-md
  "
>




          {/* Nome */}
          <div className="flex flex-col text-left">
            <label className="text-slate-900 font-semibold mb-2">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="O seu nome"
              required
              className="px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:border-[#f48c25] outline-none transition"
            />
          </div>

          {/* Telemóvel */}
          <div className="flex flex-col text-left">
            <label className="text-slate-900 font-semibold mb-2">Telemóvel</label>
            <input
              type="text"
              name="phone"
              placeholder=" 912345678"
              required
              className="px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:border-[#f48c25] outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col text-left md:col-span-2">
            <label className="text-slate-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="O seu email"
              required
              className="px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:border-[#f48c25] outline-none transition"
            />
          </div>

          {/* Mensagem */}
          <div className="flex flex-col text-left md:col-span-2">
            <label className="text-slate-900 font-semibold mb-2">Disciplina</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Indique a(s) disciplina(s)..."
              required
              className="px-4 py-3 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-500 border border-slate-300 focus:border-[#f48c25] outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Botão Enviar */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="
                px-10 py-4 bg-[#f48c25] text-white font-bold rounded-full text-lg 
                shadow-lg hover:scale-[1.05] active:scale-95 transition-all
              "
            >
              Enviar
            </button>
          </div> 


        </motion.form>
      </div>
    </section>
  );
}
