import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb'); // MUST be plain model

  const logoTexture = useTexture(snap.logoDecal);

  useFrame((_, delta) => {
    if (!materials?.lambert1) return;
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        dispose={null}
      >
        {snap.isLogoTexture && logoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={false}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
