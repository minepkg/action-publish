## minepkg publish GitHub action

This action publishes a package on minepkg.

## Usage

Set the `MINEPKG_API_KEY` secret before using this action.
You can get the api key from: https://preview.minepkg.io/docs/ci

The documentation also includes more complete examples on how to use this action.

```yaml
  # you can remove the java step for modpacks
  # or if you use "no-build" and get the jar files
  # from somewhere else
- name: Set up JDK 1.8
  uses: actions/setup-java@v1
  with:
    java-version: 1.8
- name: publish minepkg package
  uses: minepkg/action-publish@main
  with:
    api-key: ${{secrets.MINEPKG_API_KEY}}
```
