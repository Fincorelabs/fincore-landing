// components/LandingPage.jsx

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-12 flex items-center justify-center">
      <Card className="w-full max-w-xl bg-zinc-900 rounded-2xl shadow-xl">
        <CardContent className="p-6 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-center"
          >
            NEXUS Layer
          </motion.h1>

          <p className="text-zinc-400 text-center">
            Acesso reservado à camada estrutural do sistema financeiro.  
            Se você compreende o que está por trás, você é quem procuramos.
          </p>

          {/* Manifesto */}
          <section className="bg-zinc-800 p-4 rounded-lg text-sm text-zinc-200 border border-zinc-700">
            <h2 className="text-lg font-bold text-zinc-100 mb-2 text-center">Nosso Manifesto</h2>
            <p className="mb-2">
              A Fincore Labs não é uma empresa convencional.
              Somos uma camada invisível de inteligência aplicada ao fluxo financeiro sistêmico.
            </p>
            <p className="mb-2">
              Nosso propósito é restaurar o controle técnico, ético e estratégico sobre estruturas que hoje operam como caixas-pretas.
            </p>
            <p>
              A descentralização real não acontece na blockchain — acontece entre pessoas que sabem como o sistema realmente funciona.
            </p>
          </section>

          {!submitted ? (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Input type="text" placeholder="Nome (ou codinome)" required />
              <Input type="email" placeholder="E-mail seguro (Proton, Tutanota...)" required />
              <Textarea placeholder="Descreva, sem pressa, onde você já atuou." rows={4} required />
              <Button type="submit" className="w-full bg-zinc-800 hover:bg-zinc-700">
                Enviar com Discrição
              </Button>
            </form>
          ) : (
            <div className="text-center text-green-500 font-medium mt-6">
              Obrigado. Sua entrada foi registrada.  
              <br />
              A próxima camada não é pública.
            </div>
          )}

          <div className="pt-4 text-xs text-zinc-500 text-center">
            Nenhuma informação é armazenada sem criptografia.  
            Sua privacidade é mais que respeitada — é exigida.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
