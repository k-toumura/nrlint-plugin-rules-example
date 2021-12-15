module.export = (RED) => {
    RED.plugins.registerPlugin('nrlint-plugin-rules-example', {
        settings: {
            "*": { exportable: true }
        }
    });
};