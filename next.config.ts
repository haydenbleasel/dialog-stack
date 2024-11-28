import createMdx from '@next/mdx';

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMdx = createMdx({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMdx(nextConfig);
