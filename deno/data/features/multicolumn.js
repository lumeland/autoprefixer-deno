/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/multicolumn) es2022 production */
var f = Object.create;
var l = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !s.call(C, t) && t !== e && l(C, t, {
        get: () => B[t],
        enumerable: !(o = r(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? f(p(C)) : {},
  c(
    B || !C || !C.__esModule
      ? l(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = S((E, u) => {
  u.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F zB" },
      B: {
        1: "C K L G M N O",
        516: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        132: "LB MB NB OB PB QB RB nB SB oB TB UB b",
        164:
          "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB 1B 2B",
        516:
          "VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c",
        1028: "d e f g h i j k l a m H qB rB",
      },
      D: {
        420:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
        516:
          "JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "A B C K L G tB jB kB 9B AC BC uB vB wB CC lB DC",
        132: "F 8B",
        164: "D E 7B",
        420: "I n J 4B sB 5B 6B",
      },
      F: {
        1: "C jB xB IC kB",
        2: "F B EC FC GC HC",
        420: "0 1 2 3 4 5 G M N O o p q r s t u v w x y z",
        516:
          "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        132: "OC PC",
        164: "E MC NC",
        420: "sB JC yB KC LC",
      },
      H: { 1: "dC" },
      I: { 420: "mB I eC fC gC hC yB iC jC", 516: "H" },
      J: { 420: "D A" },
      K: { 1: "C jB xB kB", 2: "A B", 516: "b" },
      L: { 516: "H" },
      M: { 516: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "lC mC nC oC pC tB qC rC sC tC uC lB vC", 420: "I" },
      Q: { 132: "wC" },
      R: { 132: "xC" },
      S: { 164: "yC" },
    },
    B: 4,
    C: "CSS3 Multiple column layout",
  };
});
var d = i(A()),
  { A: F, B: G, C: H } = d,
  { default: a, ...m } = d,
  I = a !== void 0 ? a : m;
export { F as A, G as B, H as C, I as default };
