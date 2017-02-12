# longest-selectors

finds longest selectors in CSS so that you know where to start your
optimisation effort

## Usage
```
npm install longest-selectors
```

```
longest-selectors examples/styles.css
```

Specify minimum reported depth (default 3)
```
longest-selectors --min-depth=5 examples/styles.css
```
Supports remote files
```
longest-selectors https://ton.twimg.com/tfw/css/native_bundle_v1_5c9b3328abb4cb030ac7bd4b773fdbaa78a1bdc0.css
```

More input options: [list-selectors](https://github.com/davidtheclark/list-selectors#listselectorssource-options-callback)

