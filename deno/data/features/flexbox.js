/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/flexbox) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, x = Object.prototype.hasOwnProperty;
var F = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of n(B)) {
      !x.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = r(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? f(s(C)) : {},
  S(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = F((D, l) => {
  l.exports = {
    A: {
      A: { 2: "J D E F 1B", 1028: "B", 1316: "A" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        164: "2B oB I p J D E F A B C K L G M N O q r s 3B 4B",
        516: "t u v w x y",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "s t u v w x y z",
        164: "I p J D E F A B C K L G M N O q r",
      },
      E: {
        1: "F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        33: "D E 9B AC",
        164: "I p J 7B tB 8B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z mB",
        2: "F B C GC HC IC JC lB zB KC",
        33: "G M",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        33: "E OC PC",
        164: "tB LC 0B MC NC",
      },
      H: { 1: "fC" },
      I: { 1: "H kC lC", 164: "oB I gC hC iC jC 0B" },
      J: { 1: "A", 164: "D" },
      K: { 1: "b mB", 2: "A B C lB zB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "B", 292: "A" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS Flexible Box Layout Module",
  };
});
var u = i(A()),
  { A: E, B: G, C: H } = u,
  { default: a, ...m } = u,
  I = a !== void 0 ? a : m;
export { E as A, G as B, H as C, I as default };
