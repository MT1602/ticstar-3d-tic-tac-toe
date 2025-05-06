import React, { useEffect, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { gsap } from 'gsap'

interface PieceProps {
	type: 'x' | 'o'
}

const Piece: React.FC<PieceProps> = React.memo(({ type }) => {
	const modelPath = type === 'x' ? 'assets/models/x.glb' : 'assets/models/o.glb'
	const gltf = useLoader(GLTFLoader, modelPath)
	const meshRef = useRef<THREE.Mesh>(null)

	useEffect(() => {
		if (gltf.scene) {
			gltf.scene.traverse((object: any) => {
				if (object.isMesh) {
					object.material = new THREE.MeshStandardMaterial({
						roughness: 0.7,
						metalness: 0.3,
					})
					meshRef.current = object
				}
			})

			gsap.fromTo(
				gltf.scene.scale,
				{ x: 0, y: 0, z: 0 },
				{ x: 1, y: 1, z: 1, duration: 0.5, ease: 'back.out(1.7)' }
			)
		}
	}, [gltf])

	if (!gltf) {
		return <mesh> <meshBasicMaterial color={'red'} /> </mesh>
	}

	return <primitive object={gltf.scene} position={[0, 0, 0]} />
})

export default Piece