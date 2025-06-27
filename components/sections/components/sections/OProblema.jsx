import { motion } from "framer-motion";

export default function OProblema() {
  return (
    <section className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Slide 2: O Problema
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A centralização dos sistemas financeiros tradicionais tornou-se um gargalo para agentes com alta capacidade técnica. A sobrecarga regulatória, o monitoramento excessivo e a estagnação operacional criaram um abismo entre intenção e execução.
        </motion.p>
      </div>
    </section>
  );
}
