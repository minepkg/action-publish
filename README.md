<div style="display: flex; margin: 10px 0 20px">
  <img align="left" width="80" src="./assets/mpkg-publish-logo.webp" alt="minepkg" style="margin-right: 20px; align-self: center"/>
  <div>
    <h1 style="margin-top: 0; font-size: 28px; text-decoration: none">minepkg publish GitHub action</h1>
    <p>This action publishes a package on minepkg.</p>
  </div>
</div>

## Usage

Here's an example to crash test a package on a specific minecraft version.
Note that the last two arguments `working-directory` and `minecraft` are not required. By not listing them at all, the root directory will be assumed and the package will be tested on the latest possible minecraft version from what is specified for `requirements.minecraft` in the **minepkg.toml**


```yaml
name: 'crash test minepkg package'
on: 
  pull_request:
  push:

jobs:
  crash-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: minepkg/action-crash-test@main
        with:
          # if minepkg.toml is in root, can be removed
          working-directory: <directory of minepkg.toml>
          # minecraft: 1.18.2 # optional
```

## All input parameters explained

- **`working-directory`**: the directory where the minepkg.toml is located. (Default: root directory)
- **`minecraft`**: which Minecraft version to use when testing the package. Defaults to whatever is set for **requirements.minecraft** in the **minepkg.toml**
- **`no-build:`**: use **true** if you've already built the project to speed up the time it takes for the action to finish. (Default: false)
- **`cli-version`**: which version of the minepkg client to use. Defaults to the latest.

## Matrix Job Setup
The following job will test a package on multiple minecraft versions.
Make sure to double check the indentation.
```yaml
crash-test-on-multiple-versions:
  runs-on: ubuntu-latest
  strategy:
    fail-fast: false
    matrix:
      minecraft: [1.15.2, 1.16.5, 1.17.1, 1.18.2]
  steps:
    - uses: actions/checkout@v2
    - uses: minepkg/action-crashtest@main
      with:
        minecraft: ${{ matrix.minecraft }}
```