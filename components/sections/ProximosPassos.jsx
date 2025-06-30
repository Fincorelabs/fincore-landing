// components/sections/ProximosPassos.jsx
export default function ProximosPassos() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 py-24">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-wide mb-6">Próximos Passos</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
          Preencha o formulário cifrado que será aberto nas próximas etapas. Nossa triagem inicial é manual e baseada em
          padrões de comportamento. Caso o contato seja aceito, você será inserido em uma camada operacional restrita.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
          Enviar Interesse
        </button>
      </div>
    </section>
  );
}
