export default interface ITeam {
  id: string;
  name: string;
  nation: Nation;
}

export enum Nation {
  ITALY = 'ITALY',
}

