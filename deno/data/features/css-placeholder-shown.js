/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-placeholder-shown) es2022 production */
var r = Object.create;
var d = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of n(B)) {
      !u.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = f(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? r(p(C)) : {},
  S(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = c((F, s) => {
  s.exports = {
    A: {
      A: { 2: "J D E F 1B", 292: "A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B 4B",
        164:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB",
      },
      D: {
        1: "IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB",
      },
      E: {
        1: "F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p J D E 7B tB 8B 9B AC",
      },
      F: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 F B C G M N O q r s t u v w x y z GC HC IC JC lB zB KC mB",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "E tB LC 0B MC NC OC PC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 164: "1C" },
    },
    B: 5,
    C: ":placeholder-shown CSS pseudo-class",
  };
});
var A = m(a()),
  { A: G, B: H, C: I } = A,
  { default: l, ...D } = A,
  h = l !== void 0 ? l : D;
export { G as A, H as B, h as default, I as C };
