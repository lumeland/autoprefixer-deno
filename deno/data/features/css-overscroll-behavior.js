/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-overscroll-behavior) es2022 production */
var f = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of u(B)) {
      !c.call(C, o) && o !== e && r(C, o, {
        get: () => B[o],
        enumerable: !(t = s(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? f(S(C)) : {},
  n(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = i((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F zB", 132: "A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        132: "C K L G M N",
        516: "O",
      },
      C: {
        1: "nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB 1B 2B",
      },
      D: {
        1: "VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB",
        260: "UB b",
      },
      E: {
        1: "lB DC",
        2: "I n J D E F A B C K L 4B sB 5B 6B 7B 8B tB jB kB 9B",
        1090: "G AC BC uB vB wB CC",
      },
      F: {
        1: "LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB EC FC GC HC jB xB IC kB",
        260: "JB KB",
      },
      G: {
        1: "lB",
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC",
        1090: "bC cC uB vB wB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 2: "kC" },
      P: { 1: "oC pC tB qC rC sC tC uC lB vC", 2: "I lC mC nC" },
      Q: { 1: "wC" },
      R: { 2: "xC" },
      S: { 2: "yC" },
    },
    B: 5,
    C: "CSS overscroll-behavior",
  };
});
var l = p(a()),
  { A: G, B: H, C: I } = l,
  { default: d, ...D } = l,
  b = d !== void 0 ? d : D;
export { b as default, G as A, H as B, I as C };
