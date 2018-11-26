# eslint-plugin-ala

test-plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ala`:

```
$ npm install eslint-plugin-ala --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ala` globally.

## Usage

Add `ala` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ala"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ala/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





