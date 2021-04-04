## minepkg install GitHub action

This action installs the minepkg CLI tool.

## Usage

### Latest Version

```yaml
- name: Install minepkg CLI
  uses: minepkg/action-publish@main

```

### Custom Version

```yaml
- name: Install minepkg CLI
  uses: minepkg/action-publish@main
  with:
    version: 0.0.58 # supply wanted minepkg version here
```