/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-shapes) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of S(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
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
) => (e = C != null ? r(p(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = n((H, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L G M N O",
      },
      C: {
        1: "TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB 1B 2B",
        322: "KB LB MB NB OB PB QB RB nB SB oB",
      },
      D: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 I n J D E F A B C K L G M N O o p q r s t u v w x y z",
        194: "3 4 5",
      },
      E: {
        1: "B C K L G tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n J D 4B sB 5B 6B",
        33: "E F A 7B 8B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C G M N O o p q r s EC FC GC HC jB xB IC kB",
      },
      G: {
        1: "RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC LC MC",
        33: "E NC OC PC QC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 2: "yC" },
    },
    B: 4,
    C: "CSS Shapes Level 1",
  };
});
var l = E(d()),
  { A: I, B: L, C: c } = l,
  { default: f, ...F } = l,
  i = f !== void 0 ? f : F;
export { c as C, I as A, i as default, L as B };
