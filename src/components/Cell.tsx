import React, { useState, useRef, useCallback } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CellProps {
	position: [number, number, number]
	onClick: () => void
}

const Cell: React.FC<CellProps> = ({ position, onClick }) => {
	const [hovered, setHovered] = useState(false)
	const meshRef = useRef<THREE.Mesh>(null)
	const { scene, camera } = useThree()

	const sanitizedPosition = Array.isArray(position) && position.length === 3 && position.every(Number.isFinite)
		? position
		: [0, 0, 0]

	if (!Array.isArray(position) || position.length !== 3 || !position.every(Number.isFinite)) {
		console.error('Invalid position prop provided to Cell component. Using default position [0, 0, 0].')
	}

	const handleRaycastClick = useCallback(() => {
		if (!meshRef.current) return

		const raycaster = new THREE.Raycaster()
		const mouse = new THREE.Vector2(0, 0) // The position doesn't matter as we're raycasting directly from the camera

		raycaster.setFromCamera(mouse, camera)

		const intersects = raycaster.intersectObjects([meshRef.current])

		if (intersects.length > 0) {
			try {
				onClick()
			} catch (error) {
				console.error('Error during onClick event:', error)
			}
		}
	}, [camera, onClick, scene])

	useFrame(() => {
		if (meshRef.current) {
		}
	})

	return (
		<mesh
			ref={meshRef}
			position={sanitizedPosition}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			onClick={handleRaycastClick}
		>
			<boxGeometry args={[1, 1, 0.1]} />
			<meshStandardMaterial color={hovered ? '#FFDA63' : '#FFFFFF'} />
		</mesh>
	)
}

export default Cell