import toolbox from "./toolboxx";

const nameGetter = (state) => ({
  getName: () => state.name,
});

const possibleMoveRemover = (state) => ({
  removePossibleMove: (targetSquareName) => {
    const targetSquare = state.opponentGameboard.getSquares[+targetSquareName];
    state.possibleMoves.splice(state.possibleMoves.indexOf(targetSquare), 1);
  },
});

const attacker = (state) => ({
  attack: function attack(targetSquareName) {
    this.removePossibleMove(targetSquareName);
    return state.opponentGameboard.receiveAttack(targetSquareName);
  },
});

const randomAttacker = (state) => ({
  attackRandomly: function attackRandomly() {
    const targetSquareName = toolbox.pickRandom(state.possibleMoves);
    return this.attack(targetSquareName);
  },
});

const Player = (name, gameboard, opponentGameboard) => {
  const state = {
    name,
    gameboard,
    opponentGameboard,
    possibleMoves: Array(opponentGameboard.getSquares),
  };
  return {
    ...nameGetter(state),
    ...attacker(state),
    ...possibleMoveRemover(state),
    ...randomAttacker(state),
  };
};

export default Player;
