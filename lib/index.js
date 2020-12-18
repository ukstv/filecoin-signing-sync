let zondax = null

function isReady() {
    return zondax != null
}

async function load() {
    if (!zondax) {
        zondax = await import('@zondax/filecoin-signing-tools')
    }
    return zondax
}

module.exports = {
    load, isReady
}