/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/flexbox) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var x = Object.getPrototypeOf, F = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !F.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = r(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var n = (
  C,
  B,
  e,
) => (e = C != null ? f(x(C)) : {},
  i(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = S((E, l) => {
  l.exports = {
    A: {
      A: { 2: "J D E F zB", 1028: "B", 1316: "A" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        164: "0B mB I n J D E F A B C K L G M N O o p q 1B 2B",
        516: "r s t u v w",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "q r s t u v w x",
        164: "I n J D E F A B C K L G M N O o p",
      },
      E: {
        1: "F A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        33: "D E 6B 7B",
        164: "I n J 4B sB 5B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z kB",
        2: "F B C EC FC GC HC jB xB IC",
        33: "G M",
      },
      G: {
        1: "OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        33: "E MC NC",
        164: "sB JC yB KC LC",
      },
      H: { 1: "dC" },
      I: { 1: "H iC jC", 164: "mB I eC fC gC hC yB" },
      J: { 1: "A", 164: "D" },
      K: { 1: "b kB", 2: "A B C jB xB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "B", 292: "A" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS Flexible Box Layout Module",
  };
});
var u = n(A()),
  { A: G, B: H, C: I } = u,
  { default: a, ...p } = u,
  L = a !== void 0 ? a : p;
export { G as A, H as B, I as C, L as default };
