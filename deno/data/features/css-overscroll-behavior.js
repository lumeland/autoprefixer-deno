/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-overscroll-behavior) es2022 production */
var f = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of n(B)) {
      !S.call(C, o) && o !== e && r(C, o, {
        get: () => B[o],
        enumerable: !(t = s(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? f(u(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = c((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F 1B", 132: "A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        132: "C K L G M N",
        516: "O",
      },
      C: {
        1: "pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB 3B 4B",
      },
      D: {
        1: "XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB",
        260: "WB b",
      },
      E: {
        1: "nB FC",
        2: "I p J D E F A B C K L 7B tB 8B 9B AC BC uB lB mB CC",
        1090: "G DC EC vB wB xB yB",
      },
      F: {
        1: "NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB GC HC IC JC lB zB KC mB",
        260: "LB MB",
      },
      G: {
        1: "nB",
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC",
        1090: "dC eC vB wB xB yB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 2: "mC" },
      P: { 1: "qC rC uB sC tC uC vC wC nB xC yC", 2: "I nC oC pC" },
      Q: { 1: "zC" },
      R: { 2: "0C" },
      S: { 2: "1C" },
    },
    B: 5,
    C: "CSS overscroll-behavior",
  };
});
var l = m(a()),
  { A: F, B: G, C: H } = l,
  { default: d, ...p } = l,
  I = d !== void 0 ? d : p;
export { F as A, G as B, H as C, I as default };
