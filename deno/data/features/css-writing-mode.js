/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-writing-mode) es2022 production */
var n = Object.create;
var r = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty;
var s = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !m.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = p(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var S = (
  C,
  B,
  e,
) => (e = C != null ? n(l(C)) : {},
  u(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = s((F, d) => {
  d.exports = {
    A: {
      A: { 132: "J D E F A B 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z 3B 4B",
        322: "7 8 9 AB BB",
      },
      D: {
        1: "JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J",
        16: "D",
        33:
          "0 1 2 3 4 5 6 7 8 9 E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
      },
      E: {
        1: "B C K L G lB mB CC DC EC vB wB xB yB nB FC",
        2: "I 7B tB",
        16: "p",
        33: "J D E F A 8B 9B AC BC uB",
      },
      F: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33: "0 1 2 3 4 5 G M N O q r s t u v w x y z",
      },
      G: {
        1: "UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        16: "tB LC 0B",
        33: "E MC NC OC PC QC RC SC TC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "gC hC iC", 33: "oB I jC 0B kC lC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 36: "A B" },
      O: { 1: "mC" },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 33: "I" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS writing-mode property",
  };
});
var f = S(A()),
  { A: G, B: H, C: I } = f,
  { default: a, ...D } = f,
  c = a !== void 0 ? a : D;
export { c as default, G as A, H as B, I as C };
