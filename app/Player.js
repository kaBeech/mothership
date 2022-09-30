import tools from "./tools";

const nameGetter = (state) => ({
  getName: () => state.name,
});

const possibleMoveRemover = (state) => ({
  removePossibleMove: (targetSquareName) => {
    const targetSquare = state.opponentGameboard.getSquares[+targetSquareName];
    state.possibleMoves.splice(state.possibleMoves.indexOf(targetSquare), 1);
  },
});

const attacker = () => ({
  attack: function attack(targetSquareName) {
    this.removePossibleMove(targetSquareName);
    return targetSquareName;
    // return state.opponentGameboard.receiveAttack(targetSquareName);
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

const Player = (name, gameboard, opponentGameboard, species) => {
  const state = {
    name,
    gameboard,
    opponentGameboard,
    possibleMoves: Array(opponentGameboard.getSquares),
    species,
  };
  return {
    ...nameGetter(state),
    ...speciesGetter(state),
    ...attacker(state),
    ...possibleMoveRemover(state),
    ...randomAttacker(state),
  };
};

export default Player;
