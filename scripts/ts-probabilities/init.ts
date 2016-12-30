import distribution = require('./distribution');

(() => {
    var dist = new distribution.Binomial(5, 3);
    console.log(dist.variance());
})();
