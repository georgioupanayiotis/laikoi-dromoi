# Publishing Guide to NPM

This guide explains how to publish your `@panayiotis/laikoi-dromoi` package to npm.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/signup)
2. **npm CLI Login**: Run `npm login` in your terminal

## Pre-Publishing Checklist

- ✅ Build is working (`npm run build:lib`)
- ✅ TypeScript declarations are generated
- ✅ Package.json has correct metadata
- ✅ README.md is complete
- ✅ LICENSE file exists (if not, create one)

## Publishing Steps

### 1. Login to npm

```bash
npm login
```

Enter your username, password, and email when prompted.

### 2. Test the Package Locally (Optional)

Before publishing, you can test your package locally:

```bash
# Create a tarball
npm pack

# This creates a file like: panayiotis-laikoi-dromoi-0.1.0.tgz
# You can install this in another project to test:
# npm install /path/to/panayiotis-laikoi-dromoi-0.1.0.tgz
```

### 3. Build the Package

```bash
npm run build:lib
```

This will:
- Compile TypeScript to JavaScript
- Generate type definitions (`.d.ts` files)
- Create both ESM and CJS bundles

### 4. Check What Will Be Published

```bash
npm publish --dry-run
```

This shows you exactly what files will be included in the package.

### 5. Publish to npm

For first-time publishing of a scoped package:

```bash
npm publish --access public
```

For subsequent updates:

```bash
npm publish
```

**Note**: Since your package is scoped (`@panayiotis/laikoi-dromoi`), you need `--access public` on first publish, otherwise it defaults to private (which requires a paid npm account).

## Version Management

Use semantic versioning (semver):

```bash
# Patch release (0.1.0 → 0.1.1) - bug fixes
npm version patch

# Minor release (0.1.0 → 0.2.0) - new features, backward compatible
npm version minor

# Major release (0.1.0 → 1.0.0) - breaking changes
npm version major
```

Then publish:

```bash
npm publish
```

## Updating the Package

1. Make your changes
2. Update version: `npm version patch` (or `minor`/`major`)
3. Build: `npm run build:lib`
4. Publish: `npm publish`

## Automated Publishing with prepublishOnly

Your `package.json` already includes a `prepublishOnly` script that automatically runs the build before publishing. This ensures you never publish without building first.

## Verifying Your Published Package

After publishing, you can:

1. View it on npm: `https://www.npmjs.com/package/@panayiotis/laikoi-dromoi`
2. Install it in another project: `npm install @panayiotis/laikoi-dromoi`
3. Test the installation

## Unpublishing (Use with Caution)

If you need to unpublish within 72 hours:

```bash
npm unpublish @panayiotis/laikoi-dromoi@0.1.0
```

**Warning**: Unpublishing is discouraged and has restrictions. Use `npm deprecate` instead for most cases.

## GitHub Repository Setup

Before publishing, make sure to:

1. Create a GitHub repository
2. Push your code
3. Update the repository URL in `package.json` if different from the current one

## Common Issues

### Issue: "You must verify your email"
**Solution**: Check your npm account email and verify it

### Issue: "You do not have permission to publish"
**Solution**: For scoped packages, use `--access public` on first publish

### Issue: "Cannot publish over existing version"
**Solution**: Update the version number in `package.json` or use `npm version`

## Best Practices

1. ✅ Always test locally before publishing
2. ✅ Use semantic versioning
3. ✅ Keep a CHANGELOG.md file
4. ✅ Tag releases in Git
5. ✅ Write clear commit messages
6. ✅ Update README with new features

## Example Complete Workflow

```bash
# 1. Make changes to your code
# 2. Test the build
npm run build:lib

# 3. Update version
npm version patch

# 4. Commit the version change
git add .
git commit -m "Release v0.1.1"

# 5. Create git tag
git tag v0.1.1

# 6. Push to GitHub
git push && git push --tags

# 7. Publish to npm
npm publish

# 8. Verify
npm info @panayiotis/laikoi-dromoi
```

## After Publishing

Your package will be available at:
- npm: `https://www.npmjs.com/package/@panayiotis/laikoi-dromoi`
- Install: `npm install @panayiotis/laikoi-dromoi`

Users can then import and use it as documented in your README.
