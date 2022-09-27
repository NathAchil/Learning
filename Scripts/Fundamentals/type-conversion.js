let value = true;
document.getElementById('converted').innerHTML = `This sentence existing is correct, or ${String(value)}`;
/*Number() does the same thing*/
let trues, falses;
trues = Boolean(1);
trues = Boolean('Any string there is would return true');
trues = Boolean("  ")

falses = Boolean(null);
falses = Boolean(0);
falses = Boolean(NaN);
falses = Boolean(undefined);
falses = Boolean(false);