/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-boxshadow) es2022 production */
var s = Object.create;
var d = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of n(B)) {
      !S.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = l(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? s(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = m((F, A) => {
  A.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB",
        33: "3B 4B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "I p J D E F",
      },
      E: {
        1: "J D E F A B C K L G 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        33: "p",
        164: "I 7B tB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z IC JC lB zB KC mB",
        2: "F GC HC",
      },
      G: {
        1: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        33: "LC 0B",
        164: "tB",
      },
      H: { 2: "fC" },
      I: { 1: "I H jC 0B kC lC", 164: "oB gC hC iC" },
      J: { 1: "A", 33: "D" },
      K: { 1: "B C b lB zB mB", 2: "A" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS3 Box-shadow",
  };
});
var r = x(a()),
  { A: G, B: H, C: I } = r,
  { default: f, ...D } = r,
  c = f !== void 0 ? f : D;
export { c as default, G as A, H as B, I as C };
