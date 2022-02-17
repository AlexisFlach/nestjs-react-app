import ITeam from "../../interfaces/ITeam";

type TeamProps = {
  team: ITeam;
}

const TeamItem = ({team: {name, nation}}: TeamProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{nation}</h2>
    </div>
  )
}

export default TeamItem;