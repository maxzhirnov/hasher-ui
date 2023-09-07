// helpers
function addPrefixToFilename(path, prefix) {
    const lastSlashIndex = path.lastIndexOf('/');
    const directory = path.substring(0, lastSlashIndex + 1);
    const filename = path.substring(lastSlashIndex + 1);
    
    return directory + prefix + filename;
  }

  module.exports = { addPrefixToFilename }