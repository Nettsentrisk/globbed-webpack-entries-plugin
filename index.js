const glob = require('glob');
const globBase = require('glob-base');
const path = require('path');

let directories = [];

class GlobEntries {
    static entries(entryObject) {
        return function () {
            const entries = {};

            for (let bundle in entryObject) {

                if (entryObject.hasOwnProperty(bundle) && Array.isArray(entryObject[bundle])) {
                    let files = [];

                    entryObject[bundle].forEach(globString => {
                        let globDirectory = globBase(globString).base;

                        if (directories.indexOf(globDirectory) < 0) {
                            directories.push(globDirectory);
                        }

                        files = files.concat(glob.sync(globString));
                    });

                    if (files.length) {
                        entries[bundle] = files;
                    }
                }
            }

            return entries;
        }
    }

    /**
     * Install Plugin
     * @param {Object} compiler
     */
    apply(compiler) {
        if (compiler.hooks) {
            compiler.hooks.afterCompile.tapAsync(this.constructor.name, (compilation, callback) => {
                for (const directory of directories) {
                    compilation.contextDependencies.add(path.resolve(compiler.context, directory));
                }
                callback();
            });
        }
    }
}

module.exports = GlobEntries;