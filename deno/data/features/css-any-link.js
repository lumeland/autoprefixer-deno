/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-any-link) es2022 production */
var f = Object.create;
var A = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? f(u(C)) : {},
  i(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = c((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L G M N O",
      },
      C: {
        1: "JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        16: "0B",
        33:
          "0 1 2 3 4 5 6 7 8 9 mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB 1B 2B",
      },
      D: {
        1: "VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        16: "I n J D E F A B C K L",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b",
      },
      E: {
        1: "F A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        16: "I n J 4B sB 5B",
        33: "D E 6B 7B",
      },
      F: {
        1: "LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
      },
      G: {
        1: "OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        16: "sB JC yB KC",
        33: "E LC MC NC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 16: "mB I eC fC gC hC yB", 33: "iC jC" },
      J: { 16: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 33: "kC" },
      P: { 1: "pC tB qC rC sC tC uC lB vC", 16: "I", 33: "lC mC nC oC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 33: "yC" },
    },
    B: 5,
    C: "CSS :any-link selector",
  };
});
var r = p(d()),
  { A: G, B: H, C: I } = r,
  { default: l, ...D } = r,
  m = l !== void 0 ? l : D;
export { G as A, H as B, I as C, m as default };
