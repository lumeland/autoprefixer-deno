/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-media-resolution) es2022 production */
var f = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !n.call(C, t) && t !== e && r(C, t, {
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
) => (e = C != null ? f(l(C)) : {},
  p(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = m((G, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E 1B", 132: "F A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        1028: "C K L G M N O",
      },
      C: {
        1: "VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB",
        260: "I p J D E F A B C K L G 3B 4B",
        1028:
          "0 1 2 3 4 5 6 7 8 9 M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB",
      },
      D: {
        1: "aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        548: "I p J D E F A B C K L G M N O q r s t u v w x y z",
        1028:
          "0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB",
      },
      E: {
        1: "nB FC",
        2: "7B tB",
        548:
          "I p J D E F A B C K L G 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB",
      },
      F: {
        1: "QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z mB",
        2: "F",
        548: "B C GC HC IC JC lB zB KC",
        1028:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
      },
      G: {
        1: "nB",
        16: "tB",
        548:
          "E LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB",
      },
      H: { 132: "fC" },
      I: { 1: "H", 16: "gC hC", 548: "oB I iC jC 0B", 1028: "kC lC" },
      J: { 548: "D A" },
      K: { 1: "b mB", 548: "A B C lB zB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 1: "mC" },
      P: { 1: "uB sC tC uC vC wC nB xC yC", 1028: "I nC oC pC qC rC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "Media Queries: resolution feature",
  };
});
var A = D(d()),
  { A: H, B: I, C: M } = A,
  { default: u, ...E } = A,
  Q = u !== void 0 ? u : E;
export { H as A, I as B, M as C, Q as default };
