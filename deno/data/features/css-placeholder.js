/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-placeholder) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of p(B)) {
      !u.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var c = (
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
var A = m((F, l) => {
  l.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        36: "C K L G M N O",
      },
      C: {
        1: "MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F A B C K L G M N O 3B 4B",
        33:
          "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB",
      },
      D: {
        1: "SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        36:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB",
      },
      E: {
        1: "B C K L G uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I 7B tB",
        36: "p J D E F A 8B 9B AC BC",
      },
      F: {
        1: "FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        36: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB",
      },
      G: {
        1: "TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC",
        36: "E 0B MC NC OC PC QC RC SC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 36: "oB I gC hC iC jC 0B kC lC" },
      J: { 36: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 36: "A B" },
      O: { 1: "mC" },
      P: { 1: "pC qC rC uB sC tC uC vC wC nB xC yC", 36: "I nC oC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 33: "1C" },
    },
    B: 5,
    C: "::placeholder CSS pseudo-element",
  };
});
var r = c(A()),
  { A: G, B: H, C: I } = r,
  { default: a, ...D } = r,
  i = a !== void 0 ? a : D;
export { G as A, H as B, I as C, i as default };
