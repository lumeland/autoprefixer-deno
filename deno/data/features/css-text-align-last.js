/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-text-align-last) es2022 production */
var n = Object.create;
var o = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, t, a) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of s(B)) {
      !S.call(C, e) && e !== t && o(C, e, {
        get: () => B[e],
        enumerable: !(a = r(B, e)) || a.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  t,
) => (t = C != null ? n(u(C)) : {},
  m(
    B || !C || !C.__esModule
      ? o(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var d = i((E, A) => {
  A.exports = {
    A: {
      A: { 132: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        4: "C K L G M N O",
      },
      C: {
        1: "KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F A B 3B 4B",
        33:
          "0 1 2 3 4 5 6 7 8 9 C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB",
      },
      D: {
        1: "IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 I p J D E F A B C K L G M N O q r s t u v w x y z",
        322: "6 7 8 9 AB BB CB DB EB FB GB HB",
      },
      E: {
        1: "nB FC",
        2: "I p J D E F A B C K L G 7B tB 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB",
      },
      F: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C G M N O q r s GC HC IC JC lB zB KC mB",
        578: "0 1 2 3 4 t u v w x y z",
      },
      G: {
        1: "nB",
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 1: "mC" },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I" },
      Q: { 2: "zC" },
      R: { 1: "0C" },
      S: { 33: "1C" },
    },
    B: 5,
    C: "CSS3 text-align-last",
  };
});
var f = p(d()),
  { A: F, B: G, C: H } = f,
  { default: l, ...x } = f,
  I = l !== void 0 ? l : x;
export { F as A, G as B, H as C, I as default };
