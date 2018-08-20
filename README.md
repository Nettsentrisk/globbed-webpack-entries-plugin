# globbed-webpack-entries-plugin

Provides a way to glob for entry files in Webpack `watch` and `non-watch` modes, for all file types.

## Usage

```js
import GlobbedEntriesPlugin from 'globbed-webpack-entries-plugin';
 
// In your Webpack config:
{
   
    entry: GlobbedEntriesPlugin.entries({
            global : ['./Scripts/**/*.js', './Styles/**/*.scss']
        }
    )
    
    plugins: [
        new GlobbedEntriesPlugin(),
    ]    
}
```
