import {
	initializeBoard,
	isValidMove,
	makeMove,
	checkWin,
	checkDraw,
	getInitialGameState,
	Player,
	Board,
	GameState,
} from '@/utils/gameLogic'

describe('gameLogic', () => {
	describe('initializeBoard', () => {
		it('should return a 3x3 board filled with null values', () => {
			const board: Board = initializeBoard()
			expect(board.length).toBe(3)
			board.forEach((row) => {
				expect(row.length).toBe(3)
				row.forEach((cell) => {
					expect(cell).toBeNull()
				})
			})
		})

		it('should ensure that the returned board is a 2D array', () => {
			const board: Board = initializeBoard()
			expect(Array.isArray(board)).toBe(true)
			board.forEach((row) => {
				expect(Array.isArray(row)).toBe(true)
			})
		})

		it('should create a new instance each time to avoid mutation issues between tests', () => {
			const board1: Board = initializeBoard()
			const board2: Board = initializeBoard()
			expect(board1).not.toBe(board2)
		})
	})

	describe('isValidMove', () => {
		let board: Board

		beforeEach(() => {
			board = initializeBoard()
		})

		it('should return true for a valid move (empty cell within the board)', () => {
			expect(isValidMove(board, 0, 0)).toBe(true)
		})

		it('should return false for an invalid move (cell outside the board boundaries - negative indices)', () => {
			expect(isValidMove(board, -1, 0)).toBe(false)
			expect(isValidMove(board, 0, -1)).toBe(false)
			expect(isValidMove(board, -1, -1)).toBe(false)
		})

		it('should return false for an invalid move (cell outside the board boundaries - indices greater than 2)', () => {
			expect(isValidMove(board, 3, 0)).toBe(false)
			expect(isValidMove(board, 0, 3)).toBe(false)
			expect(isValidMove(board, 3, 3)).toBe(false)
		})

		it('should return false for an invalid move (cell already occupied)', () => {
			board[0][0] = 'X'
			expect(isValidMove(board, 0, 0)).toBe(false)
		})
	})

	describe('makeMove', () => {
		let gameState: GameState

		beforeEach(() => {
			gameState = getInitialGameState()
		})

		it('should return the original game state if the move is invalid (using the `isValidMove` function internally)', () => {
			const invalidGameState = makeMove(gameState, -1, 0)
			expect(invalidGameState).toBe(gameState)
		})

		it('should correctly update the board with the current player\'s symbol (\'X\' or \'O\') for a valid move', () => {
			const newGameState = makeMove(gameState, 0, 0)
			expect(newGameState.board[0][0]).toBe('X')
		})

		it('should switch the current player after a valid move', () => {
			const newGameState = makeMove(gameState, 0, 0)
			expect(newGameState.currentPlayer).toBe('O')
		})

		it('should not switch the current player after an invalid move', () => {
			gameState.board[0][0] = 'X'
			const newGameState = makeMove(gameState, 0, 0)
			expect(newGameState.currentPlayer).toBe('X')
		})

		it('should detect a winning move and update the `winner` property in the game state', () => {
			gameState.board = [
				['X', 'X', null],
				[null, 'O', null],
				[null, null, 'O'],
			]
			const newGameState = makeMove(gameState, 0, 2)
			expect(newGameState.winner).toBe('X')
		})

		it('should detect a draw and update the `isDraw` property in the game state', () => {
			gameState.board = [
				['X', 'O', 'X'],
				['X', 'X', 'O'],
				['O', 'X', null],
			]
			gameState.currentPlayer = 'O'
			const newGameState = makeMove(gameState, 2, 2)
			expect(newGameState.isDraw).toBe(true)
		})

		it('should prevent further moves if there\'s a winner', () => {
			gameState.board = [
				['X', 'X', 'X'],
				[null, 'O', null],
				[null, null, 'O'],
			]
			const newGameState = makeMove(gameState, 1, 0)
			expect(newGameState.board[1][0]).toBeNull()
			expect(newGameState.currentPlayer).toBeNull()
		})

		it('should prevent further moves if the game is a draw', () => {
			gameState.board = [
				['X', 'O', 'X'],
				['X', 'X', 'O'],
				['O', 'X', 'O'],
			]
			gameState.currentPlayer = 'X'
			gameState.isDraw = true
			const newGameState = makeMove(gameState, 0, 0)
			expect(newGameState.board).toEqual(gameState.board)
			expect(newGameState.currentPlayer).toBeNull()
		})

		it('should validate that the board is immutably updated. I.e., should not modify the original board passed to it.', () => {
			const originalBoard = [
				[null, null, null],
				[null, null, null],
				[null, null, null],
			]
			gameState.board = JSON.parse(JSON.stringify(originalBoard)) // Deep copy to avoid mutation issues
			const newGameState = makeMove(gameState, 0, 0)
			expect(gameState.board).toEqual(originalBoard) // Check if the original board is unchanged
			expect(newGameState.board).not.toBe(originalBoard) // Check if the new board is a different object
			expect(newGameState.board[0][0]).toBe('X') // Check if the move was made correctly on the new board
		})
	})

	describe('checkWin', () => {
		it('should return the winning player (\'X\' or \'O\') if a player has won horizontally. Test all three rows.', () => {
			const boardXRow1: Board = [
				['X', 'X', 'X'],
				[null, 'O', null],
				[null, null, 'O'],
			]
			expect(checkWin(boardXRow1)).toBe('X')

			const boardORow2: Board = [
				[null, 'X', null],
				['O', 'O', 'O'],
				[null, null, 'X'],
			]
			expect(checkWin(boardORow2)).toBe('O')

			const boardXRow3: Board = [
				[null, 'O', null],
				[null, null, 'O'],
				['X', 'X', 'X'],
			]
			expect(checkWin(boardXRow3)).toBe('X')
		})

		it('should return the winning player (\'X\' or \'O\') if a player has won vertically. Test all three columns.', () => {
			const boardXCol1: Board = [
				['X', null, null],
				['X', 'O', null],
				['X', null, 'O'],
			]
			expect(checkWin(boardXCol1)).toBe('X')

			const boardOCol2: Board = [
				[null, 'O', null],
				['X', 'O', null],
				[null, 'O', 'X'],
			]
			expect(checkWin(boardOCol2)).toBe('O')

			const boardXCol3: Board = [
				[null, null, 'X'],
				['O', null, 'X'],
				[null, 'O', 'X'],
			]
			expect(checkWin(boardXCol3)).toBe('X')
		})

		it('should return the winning player (\'X\' or \'O\') if a player has won diagonally (top-left to bottom-right).', () => {
			const board: Board = [
				['X', null, null],
				[null, 'X', null],
				[null, null, 'X'],
			]
			expect(checkWin(board)).toBe('X')
		})

		it('should return the winning player (\'X\' or \'O\') if a player has won diagonally (top-right to bottom-left).', () => {
			const board: Board = [
				[null, null, 'O'],
				[null, 'O', null],
				['O', null, null],
			]
			expect(checkWin(board)).toBe('O')
		})

		it('should return null if there is no winner', () => {
			const board: Board = [
				['X', 'O', null],
				[null, 'X', null],
				[null, null, 'O'],
			]
			expect(checkWin(board)).toBeNull()
		})
	})

	describe('checkDraw', () => {
		it('should return true if the board is full and there is no winner', () => {
			const board: Board = [
				['X', 'O', 'X'],
				['X', 'X', 'O'],
				['O', 'X', 'O'],
			]
			expect(checkDraw(board)).toBe(true)
		})

		it('should return false if the board is not full', () => {
			const board: Board = [
				['X', 'O', 'X'],
				['X', 'X', 'O'],
				['O', 'X', null],
			]
			expect(checkDraw(board)).toBe(false)
		})

		it('should return false if there is a winner (even if the board is full)', () => {
			const board: Board = [
				['X', 'X', 'X'],
				['O', 'O', null],
				['X', 'O', 'X'],
			]
			expect(checkDraw(board)).toBe(false)
		})
	})

	describe('getInitialGameState', () => {
		it('should return a new GameState object with an empty board', () => {
			const gameState: GameState = getInitialGameState()
			expect(gameState.board).toEqual([
				[null, null, null],
				[null, null, null],
				[null, null, null],
			])
		})

		it('should return a new GameState object with the current player set to \'X\'', () => {
			const gameState: GameState = getInitialGameState()
			expect(gameState.currentPlayer).toBe('X')
		})

		it('should return a new GameState object with the winner set to null', () => {
			const gameState: GameState = getInitialGameState()
			expect(gameState.winner).toBeNull()
		})

		it('should return a new GameState object with `isDraw` set to false', () => {
			const gameState: GameState = getInitialGameState()
			expect(gameState.isDraw).toBe(false)
		})
	})
})