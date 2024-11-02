# Personal Portfolio

## Setup

### Initialise the Application

```shell
npm create vite@latest portfolio -- --template react-ts
```

### Declutter the root by moving the configs to a seperate directory

```shell
mkdir configs
mv eslint.config.js tsconfig.app.json tsconfig.node.json ./configs/
```

### Reference the tsconfig.app.json and the tsconfig.node.json paths present in the tsconfig.json (present in the root directory)

### Edit the package.json accordingly to point the vite-config.ts and the eslint.config.js
