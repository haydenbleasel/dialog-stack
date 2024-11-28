import createMdx from '@next/mdx';
import {
  rehypeCode,
  remarkGfm,
  remarkHeading,
} from 'fumadocs-core/mdx-plugins';

const rehypeCodeOptions = {
  themes: {
    light: 'vitesse-light',
    dark: 'vitesse-dark',
  },
};

const nextConfig = {
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
