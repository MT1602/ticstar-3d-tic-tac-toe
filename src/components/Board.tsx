import React, { useState, useRef } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

import Cell from './Cell'
import Piece from './Piece'

const Board: React.FC = () => {
	const [board, setBoard] = useState<string[]>(Array(9).fill(null))
	const boardRef = useRef<THREE.Group>(null)

	useFrame(() => {
		if (boardRef.current) {
		}
	})

	const handleClick = (index: number) => {
		// Basic input sanitization
		if (typeof index !== 'number' || index < 0 || index > 8) {
			console.error('Invalid index:', index)
			return
		}

		if (board[index] || !Number.isInteger(index)) {
			return
		}

		const newBoard = [...board]
		newBoard[index] = 'X'
		setBoard(newBoard)
	}

	const cellPositions = [
		[-1, 1, 0],
		[0, 1, 0],
		[1, 1, 0],
		[-1, 0, 0],
		[0, 0, 0],
		[1, 0, 0],
		[-1, -1, 0],
		[0, -1, 0],
		[1, -1, 0],
	]

	return (
		<div className="relative w-full h-full">
			<Canvas>
				<ambientLight intensity={0.5} />
				<directionalLight position={[2, 2, 1]} intensity={0.7} />
				<PerspectiveCamera makeDefault fov={75} position={[0, 0, 3]} />
				<OrbitControls enableDamping dampingFactor={0.1} />
				<group ref={boardRef}>
					{cellPositions.map((position, index) => (
						<Cell
							key={index}
							position={position}
							onClick={() => handleClick(index)}
						>
							{board[index] === 'X' && <Piece type="x" />}
							{board[index] === 'O' && <Piece type="o" />}
						</Cell>
					))}
				</group>
			</Canvas>
		</div>
	)
}

const PerspectiveCamera = React.memo(function PerspectiveCamera(props: any) {
	const ref = useRef<THREE.PerspectiveCamera>()
	useFrame((state) => {
		ref.current?.updateProjectionMatrix()
	})
	return <perspectiveCamera ref={ref} {...props} />
})

export default Board