import tools from "./tools";

const idGetter = (state) => ({
  getID: () => state.id,
});

const nameGetter = (state) => ({
  getName: () => state.name,
});

const possibleMoveRemover = (state) => ({
  removePossibleMove: (targetSquareName) => {
    const targetSquare =
      state.opposingGameboard.getSquares()[+targetSquareName];
    state.possibleMoves.splice(state.possibleMoves.indexOf(targetSquare), 1);
  },
});

const attacker = (state) => ({
  attack: function attack(targetSquareName) {
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

const Player = (name, id, gameboard, opposingGameboard, species) => {
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
