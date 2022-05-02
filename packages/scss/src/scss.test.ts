/**
 * @jest-environment node
 */

import * as glob from 'glob'
import { resolve } from 'path'
import { runSass } from 'sass-true'

describe("scss", () => {
  const sassTestFiles = glob.sync(resolve(process.cwd(), "src/**/*.test.scss"));
  sassTestFiles.forEach((file) => runSass({ file }, { describe, it }));
});
