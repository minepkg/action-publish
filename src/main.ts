import * as fs from 'fs';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import install from 'action-install-minepkg/src/install';

const TRUE_STRINGS = ['true', 'yes', '1', 'on'];
const isTrue = (s: string) => s && TRUE_STRINGS.includes(s);

// note: debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
async function run(): Promise<void> {
  const cliVersion: string = core.getInput('cli-version') || 'latest';
  const releaseVersion: string = core.getInput('release');
  const noBuild: string = core.getInput('no-build');
  const workingDir: string = core.getInput('working-directory');

  // TODO: maybe check if it's already here
  await install({ version: cliVersion });

  if (isTrue(workingDir)) {
    process.chdir(workingDir);
  }

  if (process.platform !== 'win32' && fs.existsSync('./gradlew')) {
    core.debug('Checking gradlew');
    try {
      fs.accessSync('./gradlew', fs.constants.X_OK);
    } catch (e) {
      core.warning(
        [
          'Your gradlew is not executable. Non windows user will have trouble building your project. Fix this forever with:',
          '  git add --chmod=+x gradlew'
        ].join('n')
      );
      core.info('Duct taping this for now');
      fs.chmodSync('./gradlew', 755);
    }
  }

  const args = ['publish'];
  if (isTrue(noBuild)) args.push('--no-build');
  if (releaseVersion) args.push('--release=' + releaseVersion);

  core.info('Publishing package');
  await exec.exec('minepkg', args);
}

// eslint-disable-next-line github/no-then
run().catch(e => {
  core.debug(e);
  core.setFailed(e.message);
});
