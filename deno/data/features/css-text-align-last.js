/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-text-align-last) es2022 production */
var r = Object.create;
var o = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, t, a) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of n(B)) {
      !S.call(C, e) && e !== t && o(C, e, {
        get: () => B[e],
        enumerable: !(a = s(B, e)) || a.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  t,
) => (t = C != null ? r(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? o(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var d = i((F, A) => {
  A.exports = {
    A: {
      A: { 132: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        4: "C K L G M N O",
      },
      C: {
        1: "IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n J D E F A B 1B 2B",
        33:
          "0 1 2 3 4 5 6 7 8 9 C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB",
      },
      D: {
        1: "GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 3 I n J D E F A B C K L G M N O o p q r s t u v w x y z",
        322: "4 5 6 7 8 9 AB BB CB DB EB FB",
      },
      E: {
        1: "lB DC",
        2: "I n J D E F A B C K L G 4B sB 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC",
      },
      F: {
        1: "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C G M N O o p q EC FC GC HC jB xB IC kB",
        578: "0 1 2 r s t u v w x y z",
      },
      G: {
        1: "lB",
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 1: "kC" },
      P: { 1: "lC mC nC oC pC tB qC rC sC tC uC lB vC", 2: "I" },
      Q: { 2: "wC" },
      R: { 1: "xC" },
      S: { 33: "yC" },
    },
    B: 5,
    C: "CSS3 text-align-last",
  };
});
var f = x(d()),
  { A: G, B: H, C: I } = f,
  { default: l, ...D } = f,
  c = l !== void 0 ? l : D;
export { c as default, G as A, H as B, I as C };
