// components/sections/ProximosPassos.jsx

import { motion } from "framer-motion";

export default function ProximosPassos() {
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
          Slide 7: Próximos Passos
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Preencha o formulário com descrição. Nenhuma informação será armazenada em claro. Após validação manual, um contato será realizado de forma privada. Lembre-se: confidencialidade é a primeira camada de competência.
        </motion.p>
      </div>
    </section>
  );
}
