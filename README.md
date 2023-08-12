# nrlint-plugin-rules-example
Example rule plugin for nrlint.

This rule counts the number of function nodes in a flow,
and emit warning when the number > 10.

## Usage

### 1. install 
```sh
% gh repo clone k-toumura/nrlint-plugin-rules-example
% cd nrlint-plugin-rules-example
% npm install
% npm run build
% cd ~/.node-red
% npm install <path-to-this-plugin>
% npm install -g <path-to-this-plugin>    # need to use from CLI
```

### 2. configure

add following setting to ~/.node-red/.nrlintrc.js
```javascript
module.exports = {
    "plugins": [
        "nrlint-plugin-rules-example"
    ],
    "rules": {
        "example-rule": true,
        // ...
    }
}
```

### 3. run

Restart Node-RED, or
```sh
% npx nrlint myFlowFile.json
```
in `~/.node-red`.





