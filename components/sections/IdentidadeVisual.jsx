// components/sections/IdentidadeVisual.jsx

import { motion } from "framer-motion";

export default function IdentidadeVisual() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Slide 1: Identidade Visual Discreta
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A FinCore Labs opera em baixa frequência, com alto controle técnico. Nossa identidade é sutil, mas poderosa. Não buscamos destaque — buscamos os que reconhecem padrões invisíveis.
        </motion.p>
      </div>
    </section>
  );
}
