/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/border-radius) es2022 production */
var s = Object.create;
var o = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let r of f(B)) {
      !S.call(C, r) && r !== e && o(C, r, {
        get: () => B[r],
        enumerable: !(d = u(B, r)) || d.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? s(l(C)) : {},
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = c((E, t) => {
  t.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        257:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
        289: "oB 3B 4B",
        292: "2B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "I",
      },
      E: {
        1: "p D E F A B C K L G AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        33: "I 7B tB",
        129: "J 8B 9B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z IC JC lB zB KC mB",
        2: "F GC HC",
      },
      G: {
        1: "E LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        33: "tB",
      },
      H: { 2: "fC" },
      I: { 1: "oB I H hC iC jC 0B kC lC", 33: "gC" },
      J: { 1: "D A" },
      K: { 1: "B C b lB zB mB", 2: "A" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 257: "1C" },
    },
    B: 4,
    C: "CSS3 Border-radius (rounded corners)",
  };
});
var n = m(A()),
  { A: F, B: G, C: H } = n,
  { default: a, ...p } = n,
  I = a !== void 0 ? a : p;
export { F as A, G as B, H as C, I as default };
