type Player = 'X' | 'O' | null
type Board = Player[][]

interface GameState {
	board: Board
	currentPlayer: Player
	winner: Player
	isDraw: boolean
}

/**
 * Initializes a new, empty game board.
 * @returns {Board} A 3x3 2D array representing the board, initialized with null values.
 */
function initializeBoard(): Board {
	return Array(3)
		.fill(null)
		.map(() => Array(3).fill(null))
}

/**
 * Checks if a given move is valid.
 * @param {Board} board The current game board.
 * @param {number} row The row index of the move.
 * @param {number} col The column index of the move.
 * @returns {boolean} True if the move is valid, false otherwise.
 */
function isValidMove(board: Board, row: number, col: number): boolean {
	if (row < 0 || row > 2 || col < 0 || col > 2) {
		return false
	}
	return board[row][col] === null
}

/**
 * Attempts to make a move on the board.
 * @param {GameState} gameState The current game state.
 * @param {number} row The row index of the move.
 * @param {number} col The column index of the move.
 * @returns {GameState} The updated game state, or the original state if the move is invalid.
 */
function makeMove(gameState: GameState, row: number, col: number): GameState {
	if (!isValidMove(gameState.board, row, col)) {
		return gameState
	}

	const newBoard: Board = gameState.board.map((rowArray, rowIndex) =>
		rowIndex === row ? rowArray.map((cell, colIndex) => (colIndex === col ? gameState.currentPlayer : cell)) : rowArray
	)

	const winner = checkWin(newBoard)
	const isDraw = checkDraw(newBoard)

	const nextPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X'

	return {
		board: newBoard,
		currentPlayer: winner || isDraw ? null : nextPlayer,
		winner: winner,
		isDraw: isDraw,
	}
}

/**
 * Checks if the current player has won the game.
 * @param {Board} board The current game board.
 * @returns {Player} The winning player ('X' or 'O') or null if there is no winner.
 */
function checkWin(board: Board): Player {
	// Check rows
	for (let i = 0; i < 3; i++) {
		if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
			return board[i][0]
		}
	}

	// Check columns
	for (let j = 0; j < 3; j++) {
		if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
			return board[0][j]
		}
	}

	// Check diagonals
	if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
		return board[0][0]
	}

	if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
		return board[0][2]
	}

	return null
}

/**
 * Checks if the game is a draw.
 * @param {Board} board The current game board.
 * @returns {boolean} True if the game is a draw, false otherwise.
 */
function checkDraw(board: Board): boolean {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] === null) {
				return false
			}
		}
	}
	return !checkWin(board)
}

/**
 * Returns a new GameState object with the initial board, current player set to 'X', no winner, and isDraw set to false.
 * @returns {GameState} A new GameState object representing the initial state of the game.
 */
function getInitialGameState(): GameState {
	return {
		board: initializeBoard(),
		currentPlayer: 'X',
		winner: null,
		isDraw: false,
	}
}

export { initializeBoard, isValidMove, makeMove, checkWin, checkDraw, getInitialGameState }
export type { Player, Board, GameState }