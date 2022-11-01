Removed in git branch simplify-structure-for-react:

    .husky/
    .vscode/
    node_modules/
    .babelrc
    .eslintignore
    .eslintrc.json
    .prettierignore
    .prettierrc.json
    the dependencies from the package.json and package-lock.json files in the
        parent mothership folder

Expecting to possibly add back in:
    Husky
    Verifying lint etc checks off before commit

Removed from package.json to get npm start to work:
  "homepage": "https://github.com/kaBeech/mothership#readme",

To Do before merging:
    -Make sure Prettier auto-formats when commiting
    -Investigate Husky and lint auto-checking at commit
        -Make a decision about adding those back in or not
    -Investigate adding that homepage back into package.json