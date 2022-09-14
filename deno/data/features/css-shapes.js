/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-shapes) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of S(B)) {
      !p.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? r(n(C)) : {},
  m(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = u((G, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB 3B 4B",
        322: "MB NB OB PB QB RB SB TB pB UB qB",
      },
      D: {
        1: "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 I p J D E F A B C K L G M N O q r s t u v w x y z",
        194: "5 6 7",
      },
      E: {
        1: "B C K L G uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p J D 7B tB 8B 9B",
        33: "E F A AC BC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C G M N O q r s t u GC HC IC JC lB zB KC mB",
      },
      G: {
        1: "TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC NC OC",
        33: "E PC QC RC SC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 2: "1C" },
    },
    B: 4,
    C: "CSS Shapes Level 1",
  };
});
var l = D(d()),
  { A: H, B: I, C: L } = l,
  { default: f, ...E } = l,
  c = f !== void 0 ? f : E;
export { c as default, H as A, I as B, L as C };
