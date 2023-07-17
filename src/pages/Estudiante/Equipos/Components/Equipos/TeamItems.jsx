import Box from "./Box";
import JoinTeam from "./JoinTeam";

const TeamItems = ({ equipos }) => {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit,224px)" }}
    >
      <JoinTeam />

      {equipos?.map((equipo) => (
        <Box key={equipo.id} equipo={equipo} />
      ))}
    </div>
  );
};

export default TeamItems;
