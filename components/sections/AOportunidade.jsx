// components/sections/AOportunidade.jsx

import { motion } from "framer-motion";

export default function AOportunidade() {
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
          Slide 3: A Oportunidade
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Em um momento geopolítico instável, com tensões cibernéticas e redes de controle financeiro sendo reforçadas, surge a oportunidade para uma nova camada de atuação — invisível, precisa e autônoma. Estamos mapeando essa camada e buscamos operadores que compreendem o que acontece antes dos reflexos nos mercados. Não há tempo a perder: a janela está aberta.
        </motion.p>
      </div>
    </section>
  );
}
