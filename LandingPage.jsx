export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-r from-indigo-800 to-purple-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🚀 Landing Page da Fincore Labs</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Conectando especialistas em tecnologia bancária com propósito e precisão.
        </p>
      </section>

      {/* Manifesto */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nosso Manifesto</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          A Fincore Labs nasce com a missão de reunir os talentos mais técnicos e discretos da infraestrutura bancária.
          Acreditamos na inteligência por trás dos bastidores — profissionais que constroem o que ninguém vê, mas todos dependem.
          Se você já trabalhou em integrações críticas, SPB, SPI, ou blindagens de alto nível, essa página é um convite silencioso para algo maior.
        </p>
      </section>

      {/* Formulário de captação */}
      <section className="px-6 py-16 bg-gray-800">
        <h2 className="text-2xl font-semibold text-center mb-6">Receba um convite para nossa próxima etapa</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-colors p-3 rounded-md font-semibold"
          >
            Solicitar Convite
          </button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Fincore Labs. Todos os direitos reservados.
      </footer>
    </div>
  );
}

