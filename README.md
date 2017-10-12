# @oigroup/babel-preset-lightscript

The best way to get up and running with [LightScript](http://wcjohnson.github.io/lightscript)

## Usage

```
$ npm install --save-dev @oigroup/babel-preset-lightscript
```

```js
// .babelrc
{
  "presets": [
    [
      "@oigroup/babel-preset-lightscript",
      {
        "env": { "targets": { "ie": 10 } }
      }
    ]
  ]
}
```
> `babel-preset-lightscript` includes `babel-preset-env` and options can be
> passed in the `env` key!
