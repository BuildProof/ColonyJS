import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: false,
  clean: true,
  entry: ['src'],
  legacyOutput: true,
  tsconfig: 'tsconfig.build.json',
});
