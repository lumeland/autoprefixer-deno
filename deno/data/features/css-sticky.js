/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-sticky) es2022 production */
var i = Object.create;
var A = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of l(B)) {
      !p.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(o = r(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  t,
) => (t = C != null ? i(n(C)) : {},
  S(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var s = u((F, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "c d e f g h i j k l a m H",
        2: "C K L G",
        1028: "P Q R S T U V W X Y Z",
        4100: "M N O",
      },
      C: {
        1: "nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n J D E F A B C K L G M N O o p q r s t u 1B 2B",
        194: "0 v w x y z",
        516:
          "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB",
      },
      D: {
        1: "c d e f g h i j k l a m H qB rB 3B",
        2: "6 7 8 9 I n J D E F A B C K L G M N O o p q r AB BB CB DB EB FB GB HB IB JB KB",
        322: "0 1 2 3 4 5 s t u v w x y z LB MB NB OB",
        1028:
          "PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z",
      },
      E: {
        1: "K L G 9B AC BC uB vB wB CC lB DC",
        2: "I n J 4B sB 5B",
        33: "E F A B C 7B 8B tB jB kB",
        2084: "D 6B",
      },
      F: {
        1: "iB P Q R pB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 F B C G M N O o p q r s t u v w x y z EC FC GC HC jB xB IC kB",
        322: "8 9 AB",
        1028:
          "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB",
      },
      G: {
        1: "WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC",
        33: "E NC OC PC QC RC SC TC UC VC",
        2084: "LC MC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1028: "kC" },
      P: { 1: "mC nC oC pC tB qC rC sC tC uC lB vC", 2: "I lC" },
      Q: { 1028: "wC" },
      R: { 2: "xC" },
      S: { 516: "yC" },
    },
    B: 5,
    C: "CSS position:sticky",
  };
});
var f = c(s()),
  { A: G, B: H, C: I } = f,
  { default: a, ...D } = f,
  m = a !== void 0 ? a : D;
export { G as A, H as B, I as C, m as default };
