"use strict";
function kgTolbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgTolbs(23);
kgTolbs('amit');
//# sourceMappingURL=index.js.map