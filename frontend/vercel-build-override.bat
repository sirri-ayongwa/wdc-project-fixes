@echo off
echo Running custom build script
:: Force pnpm to install without frozen lockfile
pnpm install --no-frozen-lockfile
:: Run the actual build
pnpm build