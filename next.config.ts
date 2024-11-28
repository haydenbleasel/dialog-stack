import createMdx from '@next/mdx';
import {
  type RehypeCodeOptions,
  rehypeCode,
  remarkGfm,
  remarkHeading,
} from 'fumadocs-core/mdx-plugins';
import type { NextConfig } from 'next';

const rehypeCodeOptions: RehypeCodeOptions = {
  themes: {
    light: 'catppuccin-mocha',
    dark: 'catppuccin-mocha',
  },
};

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMdx = createMdx({
  // Add markdown plugins here, as desired
  options: {
    rehypePlugins: [[rehypeCode, rehypeCodeOptions]],
    remarkPlugins: [remarkGfm, remarkHeading],
  },
});

// Merge MDX config with Next.js config
export default withMdx(nextConfig);
