//console.log(__dirname + '/' + path.normalize('./Organism') + '.js');
module.exports = () => Object.keys(require.cache).forEach(key => delete require.cache[key]);
