// credits https://github.com/t3-oss/create-t3-app/blob/next/.github/changeset-version.js

import { exec } from 'child_process';

// This script is used by the `continuous-deployment.yaml` workflow to update the version of the packages being released.
// The standard step is only to run `changeset version` but this does not update the package-lock.json file.
// So we also run `pnpm install --lockfile-only`, which does this update.
// This is a workaround until this is handled automatically by `changeset version`.
// See https://github.com/changesets/changesets/issues/421.
exec('pnpm changeset version');
exec('pnpm install --lockfile-only');
