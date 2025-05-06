import React from 'react'
import Board from '@/components/Board'
import '@/index.css'

const App: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-primary">
			<h1 className="text-4xl font-roboto text-secondary mb-sm">3D Tic Tac Toe</h1>
			<Board />
		</div>
	)
}

export default App