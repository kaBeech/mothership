import tools from "./tools";

console.log("Yes!!");

const nameGetter = (state) => ({
  getName: () => state.name,
});

const possibleMoveRemover = (state) => ({
  removePossibleMove: (targetSquareName) => {
    const targetSquare = state.opposingGameboard.getSquares[+targetSquareName];
    state.possibleMoves.splice(state.possibleMoves.indexOf(targetSquare), 1);
  },
});

const attacker = () => ({
  attack: function attack(targetSquareName) {
    this.removePossibleMove(targetSquareName);
    return targetSquareName;
  },
});

const randomAttacker = (state) => ({
  attackRandomly: function attackRandomly() {
    const targetSquareName = tools.pickRandom(state.possibleMoves);
    return this.attack(targetSquareName);
  },
});

const speciesGetter = (state) => ({
  getSpecies: () => state.species,
});

const opposingGameboardGetter = (state) => ({
  getOpposingGameboard: () => state.opposingGameboard,
});

const Player = (name, gameboard, opposingGameboard, species) => {
  const state = {
    name,
    gameboard,
    opposingGameboard,
    possibleMoves: Array(opposingGameboard.getSquares()),
    species,
  };
  return {
    ...nameGetter(state),
    ...speciesGetter(state),
    ...opposingGameboardGetter(state),
    ...attacker(state),
    ...possibleMoveRemover(state),
    ...randomAttacker(state),
  };
};

export default Player;
