import { Binomial } from './distributions/binomial';

(() => {
    var dist = new Binomial(5, 3);
    console.log(dist.standardDeviation());
})();
