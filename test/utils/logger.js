function ts() {
    return new Date().toISOString();
}

module.exports = {
    info:  (msg) => console.log(`${ts()} INFO  saucedemo: ${msg}`),
    warn:  (msg) => console.warn(`${ts()} WARN  saucedemo: ${msg}`),
    error: (msg) => console.error(`${ts()} ERROR saucedemo: ${msg}`),
};