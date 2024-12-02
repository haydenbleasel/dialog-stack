import type { Registry } from './shadcn-ui';

/*
 * As shadcn/ui custom registry components are undocumented, here are some notes:
 *
 * - `registryDependencies` is an array of shadcn/ui component names that this component depends on.
 * - `dependencies` is an array of npm package names that this component depends on.
 * - `devDependencies` is an array of npm package names that this component depends on.
 */

export const ui: Registry = [
  {
    name: 'dialog-stack',
    type: 'registry:ui',
    registryDependencies: [],
    dependencies: ['@radix-ui/react-portal'],
    devDependencies: [],
    files: [
      {
        path: 'dialog-stack.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
