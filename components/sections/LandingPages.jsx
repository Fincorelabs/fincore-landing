import IdentidadeVisual from "./components/sections/IdentidadeVisual";
import OProblema from "./components/sections/OProblema";
import AOportunidade from "./components/sections/AOportunidade";
import AEstrutura from "./components/sections/AEstrutura";
import OPerfilQueProcuramos from "./components/sections/OPerfilQueProcuramos";
import OConvite from "./components/sections/OConvite";
import ProximosPassos from "./components/sections/ProximosPassos";

export default function LandingPage() {
  return (
    <>
      <IdentidadeVisual />
      <OProblema />
      <AOportunidade />
      <AEstrutura />
      <OPerfilQueProcuramos />
      <OConvite />
      <ProximosPassos />
    </>
  );
}

