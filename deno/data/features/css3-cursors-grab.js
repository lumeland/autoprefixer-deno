/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css3-cursors-grab) es2022 production */
var f = Object.create;
var o = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let r of b(B)) {
      !n.call(C, r) && r !== e && o(C, r, {
        get: () => B[r],
        enumerable: !(t = u(B, r)) || t.enumerable,
      });
    }
  }
  return C;
};
var g = (
  C,
  B,
  e,
) => (e = C != null ? f(l(C)) : {},
  c(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = S((D, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        33: "0B mB I n J D E F A B C K L G M N O o p q r s t u v 1B 2B",
      },
      D: {
        1: "YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB",
      },
      E: {
        1: "B C K L G jB kB 9B AC BC uB vB wB CC lB DC",
        33: "I n J D E F A 4B sB 5B 6B 7B 8B tB",
      },
      F: {
        1: "C OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z IC kB",
        2: "F B EC FC GC HC jB xB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
      },
      G: {
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 2: "a" },
      N: { 2: "A B" },
      O: { 2: "kC" },
      P: { 2: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 33: "wC" },
      R: { 2: "xC" },
      S: { 2: "yC" },
    },
    B: 3,
    C: "CSS grab & grabbing cursors",
  };
});
var s = g(A()),
  { A: E, B: F, C: G } = s,
  { default: d, ...i } = s,
  H = d !== void 0 ? d : i;
export { E as A, F as B, G as C, H as default };
