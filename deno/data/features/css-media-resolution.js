/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-media-resolution) es2022 production */
var f = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, o) => {
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
var E = (
  C,
  B,
  e,
) => (e = C != null ? f(l(C)) : {},
  D(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = p((H, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E zB", 132: "F A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        1028: "C K L G M N O",
      },
      C: {
        1: "TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB",
        260: "I n J D E F A B C K L G 1B 2B",
        1028:
          "0 1 2 3 4 5 6 7 8 9 M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB",
      },
      D: {
        1: "YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        548: "I n J D E F A B C K L G M N O o p q r s t u v w x",
        1028:
          "0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB",
      },
      E: {
        1: "lB DC",
        2: "4B sB",
        548:
          "I n J D E F A B C K L G 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC",
      },
      F: {
        1: "OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z kB",
        2: "F",
        548: "B C EC FC GC HC jB xB IC",
        1028:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
      },
      G: {
        1: "lB",
        16: "sB",
        548:
          "E JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB",
      },
      H: { 132: "dC" },
      I: { 1: "H", 16: "eC fC", 548: "mB I gC hC yB", 1028: "iC jC" },
      J: { 548: "D A" },
      K: { 1: "b kB", 548: "A B C jB xB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 1: "kC" },
      P: { 1: "tB qC rC sC tC uC lB vC", 1028: "I lC mC nC oC pC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "Media Queries: resolution feature",
  };
});
var A = E(d()),
  { A: I, B: M, C: Q } = A,
  { default: u, ...F } = A,
  c = u !== void 0 ? u : F;
export { c as default, I as A, M as B, Q as C };
