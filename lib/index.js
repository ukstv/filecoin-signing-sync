let zondax = null

function isReady() {
    return zondax != null
}

async function load() {
    if (zondax) {
        return zondax
    } else {
        zondax = await import('@zondax/filecoin-signing-tools')
    }
}

module.exports = {
    load, isReady
}