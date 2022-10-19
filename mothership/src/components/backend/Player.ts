import tools from "./tools";
import { Gameboard, Species, SquareName } from "./types";

interface PlayerState {
  name: string;
  id: string;
  gameboard: Gameboard;
  opposingGameboard: Gameboard;
  possibleMoves: Array<SquareName>;
  species: Species;
}

const idGetter = (state: PlayerState) => ({
  getID: () => state.id,
});

const nameGetter = (state: PlayerState) => ({
  getName: () => state.name,
});

const possibleMovesGetter = (state: PlayerState) => ({
  getPossibleMoves: () => state.possibleMoves,
});

const possibleMoveRemover = (state: PlayerState) => ({
  removePossibleMove: (targetSquareName: SquareName) => {
    const targetSquare =
      state.opposingGameboard.getSquares()[+targetSquareName];
    state.possibleMoves.splice(state.possibleMoves.indexOf(targetSquare), 1);
  },
});

const attacker = (state: PlayerState) => ({
  attack: function attack(targetSquareName: SquareName) {
    this.removePossibleMove(targetSquareName);
    return targetSquareName;
  },
});

const randomAttacker = (state: PlayerState) => ({
  attackRandomly: function attackRandomly() {
    const targetSquare = tools.pickRandomFromArray(state.possibleMoves);
    const targetSquareName = targetSquare.getName();
    return this.attack(targetSquareName);
  },
});

const speciesGetter = (state: PlayerState) => ({
  getSpecies: () => state.species,
});

const opposingGameboardGetter = (state: PlayerState) => ({
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
    ...possibleMovesGetter(state),
    ...possibleMoveRemover(state),
    ...attacker(state),
    ...randomAttacker(state),
  };
};

export default Player;
