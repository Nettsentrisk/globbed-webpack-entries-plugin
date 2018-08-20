# globbed-webpack-entries-plugin

[![license][license]][license-url]

Provides a way to glob for entry files in Webpack `watch` and `non-watch` modes.

## Usage

```js
import GlobbedEntriesPlugin from 'globbed-webpack-entries-plugin';
 
// In your Webpack config:
{
   
    entry: GlobbedEntriesPlugin.entries({
            global : ['./Scripts/index.js', './Styles/main.scss']
        }
    )
    
    plugins: [
        new GlobbedEntriesPlugin(),
    ]    
}
```
