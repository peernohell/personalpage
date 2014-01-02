var
    yaml = require('js-yaml'),
    fs   = require('fs'),
    jade = require('jade'),
    jadeOptions = {},
    restaurants;

try {
    restaurants = yaml.safeLoad(fs.readFileSync('restaurants.yml', 'utf8'));
} catch (e) {
    console.log(e);
    process.exit(1);
}

jadeOptions.restaurants = restaurants;
jadeOptions.pretty = true;

console.log(jade.renderFile('./templates/index.jade', jadeOptions));

