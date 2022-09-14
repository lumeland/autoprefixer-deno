/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-snappoints) es2022 production */
var S = Object.create;
var A = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !s.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = f(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? S(p(C)) : {},
  c(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = u((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F 1B", 6308: "A", 6436: "B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        6436: "C K L G M N O",
      },
      C: {
        1: "aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z 3B 4B",
        2052:
          "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB",
      },
      D: {
        1: "bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB",
        8258: "YB ZB aB",
      },
      E: {
        1: "B C K L G lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p J D E 7B tB 8B 9B AC",
        3108: "F A BC uB",
      },
      F: {
        1: "b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB GC HC IC JC lB zB KC mB",
        8258: "PB QB RB SB TB UB VB WB",
      },
      G: {
        1: "UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "E tB LC 0B MC NC OC PC",
        3108: "QC RC SC TC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 2: "mC" },
      P: { 1: "uB sC tC uC vC wC nB xC yC", 2: "I nC oC pC qC rC" },
      Q: { 2: "zC" },
      R: { 2: "0C" },
      S: { 2052: "1C" },
    },
    B: 4,
    C: "CSS Scroll Snap",
  };
});
var r = m(d()),
  { A: G, B: H, C: I } = r,
  { default: l, ...D } = r,
  i = l !== void 0 ? l : D;
export { G as A, H as B, I as C, i as default };
