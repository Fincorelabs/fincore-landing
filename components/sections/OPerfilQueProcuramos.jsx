// components/sections/OPerfilQueProcuramos.jsx

import { motion } from "framer-motion";

export default function OPerfilQueProcuramos() {
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
          Slide 5: O Perfil Que Procuramos
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Buscamos profissionais com histórico comprovado em infraestrutura crítica, segurança bancária, redes financeiras, subcontas, core banking, ou que tenham atuado em tesourarias e estruturas sensíveis. Discrição, precisão e autonomia são pré-requisitos. Se você sabe o que deve ser feito antes de ser solicitado, é você quem procuramos.
        </motion.p>
      </div>
    </section>
  );
}
