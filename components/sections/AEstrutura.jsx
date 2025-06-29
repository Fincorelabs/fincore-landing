// components/sections/AEstrutura.jsx

import { motion } from "framer-motion";

export default function AEstrutura() {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Slide 4: A Estrutura
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Operamos sob camadas distribuídas. Cada colaborador atua em silos seguros, com autonomia técnica e rastreabilidade lógica mínima. As comunicações seguem protocolos sob demanda. Nenhuma informação sensível é revelada integralmente. A compartimentalização garante resiliência e blindagem operacional.
        </motion.p>
      </div>
    </section>
  );
}
