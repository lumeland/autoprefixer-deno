/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-sticky) es2022 production */
var i = Object.create;
var A = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of r(B)) {
      !p.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(o = n(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  t,
) => (t = C != null ? i(l(C)) : {},
  S(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var s = u((E, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "c d e f g h i j k l m n o a H",
        2: "C K L G",
        1028: "P Q R S T U V W X Y Z",
        4100: "M N O",
      },
      C: {
        1: "pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F A B C K L G M N O q r s t u v w 3B 4B",
        194: "0 1 2 x y z",
        516:
          "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB",
      },
      D: {
        1: "c d e f g h i j k l m n o a H sB 5B 6B",
        2: "8 9 I p J D E F A B C K L G M N O q r s t AB BB CB DB EB FB GB HB IB JB KB LB MB",
        322: "0 1 2 3 4 5 6 7 u v w x y z NB OB PB QB",
        1028:
          "RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z",
      },
      E: {
        1: "K L G CC DC EC vB wB xB yB nB FC",
        2: "I p J 7B tB 8B",
        33: "E F A B C AC BC uB lB mB",
        2084: "D 9B",
      },
      F: {
        1: "kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z GC HC IC JC lB zB KC mB",
        322: "AB BB CB",
        1028:
          "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB",
      },
      G: {
        1: "YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC",
        33: "E PC QC RC SC TC UC VC WC XC",
        2084: "NC OC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1028: "mC" },
      P: { 1: "oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I nC" },
      Q: { 1028: "zC" },
      R: { 2: "0C" },
      S: { 516: "1C" },
    },
    B: 5,
    C: "CSS position:sticky",
  };
});
var f = c(s()),
  { A: F, B: G, C: H } = f,
  { default: a, ...m } = f,
  I = a !== void 0 ? a : m;
export { F as A, G as B, H as C, I as default };
