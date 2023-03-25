<div style="display: flex; margin: 10px 0 20px">
  <img align="left" width="80" src="./assets/mpkg-publish-logo.webp" alt="minepkg" style="margin-right: 20px; align-self: center"/>
  <div>
    <h1 style="margin-top: 0; font-size: 28px; text-decoration: none">minepkg publish GitHub action</h1>
    <p>This action publishes a package on minepkg.</p>
  </div>
</div>

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