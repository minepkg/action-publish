## minepkg publish GitHub action

This action publishes a package on minepkg.

## Usage

Set the `MINEPKG_API_KEY` secret before using this action.
You can get the api key from: https://preview.minepkg.io/docs/ci
The documentation also includes more complete examples on how to use this action.

```yaml
- name: Install minepkg CLI
  uses: minepkg/action-publish@main
  with:
    api-key: ${{secrets.MINEPKG_API_KEY}}
```
