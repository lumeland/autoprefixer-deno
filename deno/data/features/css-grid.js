/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-grid) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var G = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = u(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? f(G(C)) : {},
  n(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = i((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E zB", 8: "F", 292: "A B" },
      B: {
        1: "M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        292: "C K L G",
      },
      C: {
        1: "NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n J D E F A B C K L G M N O 1B 2B",
        8: "0 1 2 3 4 5 6 7 8 o p q r s t u v w x y z",
        584: "9 AB BB CB DB EB FB GB HB IB JB KB",
        1025: "LB MB",
      },
      D: {
        1: "RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G M N O o p q r s t",
        8: "u v w x",
        200:
          "0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
        1025: "QB",
      },
      E: {
        1: "B C K L G tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n 4B sB 5B",
        8: "J D E F A 6B 7B 8B",
      },
      F: {
        1: "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C G M N O o p q r s t u v w EC FC GC HC jB xB IC kB",
        200: "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB",
      },
      G: {
        1: "RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC",
        8: "E LC MC NC OC PC QC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC", 8: "yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 292: "A B" },
      O: { 1: "kC" },
      P: { 1: "mC nC oC pC tB qC rC sC tC uC lB vC", 2: "lC", 8: "I" },
      Q: { 1: "wC" },
      R: { 2: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS Grid Layout (level 1)",
  };
});
var r = p(a()),
  { A: H, B: I, C: L } = r,
  { default: l, ...D } = r,
  c = l !== void 0 ? l : D;
export { c as default, H as A, I as B, L as C };
