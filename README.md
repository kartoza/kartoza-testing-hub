# kartoza-testing-hub

[![Schedule tests](https://github.com/kartoza/kartoza-testing-hub/actions/workflows/test.yml/badge.svg?event=schedule)](https://github.com/kartoza/kartoza-testing-hub/actions/workflows/test.yml)

Testing repository for all deployed sites. Here, playwright is used for end-to-end testing.

![Workflow](./workflow.png)


## Setting up

To set up the project, clone this repository:

```bash
git clone https://github.com/kartoza/kartoza-testing-hub.git
```

or

```bash
git clone git@github.com:kartoza/kartoza-testing-hub.git
```

Navigate to `src` directory.

Create a new directory, preferably, the name of the project followed by the suffix `_test`.

Example, `kartoza_test`.

Or copy from the available template and rename it.

```bash
cp -r template <project-name>_test
```

Rename `<project-name>` to the project being worked on.

## Adding tests

Navigate to your test directory.

Here you will find several scripts that will assist in creating tests.

Before creating any test, ensure you have set the base url for the tests.

The base url will be set in two instances:

- `base-url.sh`
```bash
#!/usr/bin/env bash

echo "Setting BASE_URL for test site"
BASE_URL=https://kartoza.com
```

- `playwright.config.ts`
```TypeScript
import { defineConfig, devices } from '@playwright/test';
...

export default defineConfig({
    // Other configurations
    ...

    use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://kartoza.com',
    },

    project = [
    // configure projects for major browsers.
    ]
});

```

To create an authentication file `auth.json`.

```bash
./create-auth.sh
```

To record a test:

```bash
./record-test.sh 01-landing-page
```


## Running tests

To run tests:

```bash
./run-tests.sh
```

An alternative approach when running tests,
is to use `Playwright Test for VSCode` extension.s

For more information on running tests using playwright, go through the [documentation](https://playwright.dev/).
