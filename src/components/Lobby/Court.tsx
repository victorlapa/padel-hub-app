import CourtUser from "./CourtUser";

const Court = () => {
  return (
    <div className="absolute inset-0 mx-auto w-full max-w-md border-2 border-white bg-sky-500">
      <div className="absolute top-0 left-[50%] h-[100%] w-[2px] bg-white" />
      <div className="absolute top-[15%] left-[0] h-[2px] w-[100%] bg-white" />
      <div className="absolute bottom-[15%] left-[0] h-[2px] w-[100%] bg-white" />
      <div className="absolute top-[50%] left-[0] h-[4%] w-[100%] border-t-2 border-white" />

      <CourtUser name="vlapa1" elo={1000} team="A" position="left" />
      <CourtUser name="jn02" team="A" position="right" />
      <CourtUser name="dka01" team="B" position="left" />
      <CourtUser name="tmm12" team="B" position="right" />
    </div>
  );
};

export default Court;
