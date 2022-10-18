import tools from "./tools";
import { Gameboard, Species } from "./types";

type SquareName = `${number}${number}`;

const idGetter = (state) => ({
  getID: () => state.id,
});

const nameGetter = (state) => ({
  getName: () => state.name,
});

const possibleMoveRemover = (state) => ({
  removePossibleMove: (targetSquareName: SquareName) => {
    const targetSquare =
      state.opposingGameboard.getSquares()[+targetSquareName];
    state.possibleMoves.splice(state.possibleMoves.indexOf(targetSquare), 1);
  },
});

const attacker = (state) => ({
  attack: function attack(targetSquareName: string) {
    this.removePossibleMove(targetSquareName);
    console.log(state.possibleMoves);
    return targetSquareName;
  },
});

const randomAttacker = (state) => ({
  attackRandomly: function attackRandomly() {
    const targetSquare = tools.pickRandomFromArray(state.possibleMoves);
    const targetSquareName = targetSquare.getName();
    return this.attack(targetSquareName);
  },
});

const speciesGetter = (state) => ({
  getSpecies: () => state.species,
});

const opposingGameboardGetter = (state) => ({
  getOpposingGameboard: () => state.opposingGameboard,
});

const Player = (
  name: string,
  id: string,
  gameboard: Gameboard,
  opposingGameboard: Gameboard,
  species: Species
) => {
  const state = {
    name,
    id,
    gameboard,
    opposingGameboard,
    possibleMoves: opposingGameboard.getSquares().slice(),
    species,
  };
  return {
    ...nameGetter(state),
    ...idGetter(state),
    ...speciesGetter(state),
    ...opposingGameboardGetter(state),
    ...attacker(state),
    ...possibleMoveRemover(state),
    ...randomAttacker(state),
  };
};

export default Player;
