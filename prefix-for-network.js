module.exports = function (network) {
  var net = parseInt(network)
  var prefix;

  switch (net) {
    case 88: // main net
      prefix = ''
      break
    case 9: // ropsten test net
      prefix = 'testnet.'
      break
    default:
      prefix = ''
  }
  return prefix
}
