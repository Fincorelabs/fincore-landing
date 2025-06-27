import { motion } from "framer-motion";

export default function IdentidadeVisual() {
  return (
    <section className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Slide 1: Identidade Visual Discreta
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A FinCore Labs opera em baixa frequência, com alto controle técnico. Nossa identidade é sutil, mas poderosa. Não buscamos destaque — buscamos os que reconhecem padrões invisíveis.
        </motion.p>
      </div>
    </section>
  );
}
