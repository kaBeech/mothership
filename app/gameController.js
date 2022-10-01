/* eslint-disable no-param-reassign */
import Gameboard from "./Gameboard";
import Player from "./Player";

const player1Gameboard = Gameboard();
player1Gameboard.init();

const player2Gameboard = Gameboard();
player2Gameboard.init();

const player1 = Player("Alice", player1Gameboard, player2Gameboard, "computer");
const player2 = Player("Bob", player2Gameboard, player1Gameboard, "human");

player1Gameboard.addShip("Mothership", ["20", "30", "40", "50", "60", "70"]);
player1Gameboard.addShip("Battleship", ["29", "39", "49", "59", "69"]);
player1Gameboard.addShip("Cruiser", ["28", "38", "48", "58"]);
player1Gameboard.addShip("Gunship", ["27", "37", "47"]);
player1Gameboard.addShip("Starfighter", ["26", "36"]);

player2Gameboard.addShip("Mothership", ["21", "31", "41", "51", "61", "71"]);
player2Gameboard.addShip("Battleship", ["22", "32", "42", "52", "62"]);
player2Gameboard.addShip("Cruiser", ["23", "33", "43", "53"]);
player2Gameboard.addShip("Gunship", ["24", "34", "44"]);
player2Gameboard.addShip("Starfighter", ["25", "35"]);

const currentPlayerSetter = (state) => ({
  setCurrentPlayer: (player) => {
    state.currentPlayer = player;
  },
});

const opposingPlayerSetter = (state) => ({
  setOpposingPlayer: (player) => {
    state.opposingPlayer = player;
  },
});

const gameInProgressGetter = (state) => ({
  getGameInProgress: () => state.gameInProgress,
});

const gameInProgressSetter = (state) => ({
  setGameInProgress: (boolean) => {
    state.gameInProgress = boolean;
  },
});

const promptPlayer = (gameController) => {
  const currentPlayer = gameController.getCurrentPlayer();
  if (currentPlayer.getSpecies() === "computer") {
    const targetSquare = currentPlayer.attackRandomly();
    return gameController.evalTurn(targetSquare);
  }
  return console.log(`${currentPlayer}'s Turn!`);
};

const gameStarter = (state) => ({
  startGame: function startGame() {
    if (!state.gameInProgress) {
      this.setGameInProgress(true);
      return promptPlayer(this);
    }
    return console.log("error");
  },
});

const turnEvaluator = (state) => ({
  evalTurn: function evalTurn(targetSquare) {
    if (this.getGameInProgress()) {
      const { currentPlayer } = state;
      if (!currentPlayer.opposingGameboard.receiveAttack(targetSquare)) {
        console.log("You missed!");
      } else {
        targetSquare.getShip().takeDamage();
        if (currentPlayer.opposingGameboard.checkWin()) {
          this.setGameInProgress(false);
          return console.log("Game Won!!!");
        }
      }
      this.setCurrentPlayer(state.opposingPlayer);
      this.setOpposingPlayer(currentPlayer);
      return promptPlayer(this);
    }
    return console.log("error");
  },
});

const gameController = (() => {
  const state = {
    gameInProgress: false,
    currentPlayer: player1,
    opposingPlayer: player2,
  };

  return {
    ...currentPlayerSetter(state),
    ...opposingPlayerSetter(state),
    ...gameInProgressGetter(state),
    ...gameInProgressSetter(state),
    ...gameStarter(state),
    ...turnEvaluator(state),
  };
})();

export default gameController;
