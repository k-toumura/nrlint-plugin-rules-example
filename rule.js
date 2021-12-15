module.exports = {
    "example-rule": {
        meta: {
            type: "suggestion",
            severity: "warn",
            docs: {
                description: "number of function node < 10"
            },
            options: {}
        },
        create: function(context, ruleConfig) {
            let maxFunc = 10;
            if ('maxFunc' in ruleConfig) {
                maxFunc = ruleConfig.maxFunc
            }
            return {
                flow: function(flow) {
                    const numFunc = 
                        [...flow.nodes.values()].filter((e)=>e.type=="function").length;
                    if (numFunc > maxFunc) {
                        context.report({
                            location: [flow.id],
                            message: "too many function nodes in a flow"
                        })
                    }
                }
            }
        }
    }
};