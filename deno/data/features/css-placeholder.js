/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-placeholder) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !n.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = p(B, t)) || o.enumerable,
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
  c(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = S((F, l) => {
  l.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        36: "C K L G M N O",
      },
      C: {
        1: "KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n J D E F A B C K L G M N O 1B 2B",
        33:
          "0 1 2 3 4 5 6 7 8 9 o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB",
      },
      D: {
        1: "QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        36:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
      },
      E: {
        1: "B C K L G tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I 4B sB",
        36: "n J D E F A 5B 6B 7B 8B",
      },
      F: {
        1: "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        36: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB",
      },
      G: {
        1: "RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC",
        36: "E yB KC LC MC NC OC PC QC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 36: "mB I eC fC gC hC yB iC jC" },
      J: { 36: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 36: "A B" },
      O: { 1: "kC" },
      P: { 1: "nC oC pC tB qC rC sC tC uC lB vC", 36: "I lC mC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 33: "yC" },
    },
    B: 5,
    C: "::placeholder CSS pseudo-element",
  };
});
var r = m(A()),
  { A: G, B: H, C: I } = r,
  { default: a, ...D } = r,
  i = a !== void 0 ? a : D;
export { G as A, H as B, I as C, i as default };
