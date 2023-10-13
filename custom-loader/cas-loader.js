module.exports = function(content, map, meta) {
    const funcName = /func\s(\w+)/.exec(content)[1]
    const funcParam1 = /func\s\w+\s(\w+)/.exec(content)[1]
    const funcParam2 = /func\s\w+\s\w+\s(\w+)/.exec(content)[1]
    const ctx = /return\s(.+)/.exec(content)[1]
    content = `function ${funcName}(${funcParam1}, ${funcParam2}) { ${ctx} }`
    return content
}
