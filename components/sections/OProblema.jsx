// components/sections/OProblema.jsx

import { motion } from "framer-motion";

export default function OProblema() {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Slide 2: O Problema
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Vivemos uma era em que talentos altamente técnicos, especialmente na infraestrutura bancária, enfrentam limitações impostas por burocracias internas, lentidão de inovação e estruturas pouco ágeis. Muitas dessas mentes brilhantes desejam contribuir com algo maior, mas permanecem presas a culturas tradicionais, sem canais discretos para transição segura.
        </motion.p>
      </div>
    </section>
  );
}
