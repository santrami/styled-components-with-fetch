import OtroComponenteMas from "../../components/OtroComponenteMas";

const OtroComponente = () => {
  return <div>otro componente</div>;
};

export default function hoal() {
  return (
    <>
      <div className="bg-slate-300">my game pageddd</div>
      <OtroComponente />
      <OtroComponenteMas /> 
    </>
  );
}
