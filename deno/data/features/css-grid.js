/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-grid) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !G.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = u(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? f(s(C)) : {},
  i(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E 1B", 8: "F", 292: "A B" },
      B: {
        1: "M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        292: "C K L G",
      },
      C: {
        1: "PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F A B C K L G M N O 3B 4B",
        8: "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB",
        584: "BB CB DB EB FB GB HB IB JB KB LB MB",
        1025: "NB OB",
      },
      D: {
        1: "TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N O q r s t u v",
        8: "w x y z",
        200:
          "0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB",
        1025: "SB",
      },
      E: {
        1: "B C K L G uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p 7B tB 8B",
        8: "J D E F A 9B AC BC",
      },
      F: {
        1: "FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C G M N O q r s t u v w x y GC HC IC JC lB zB KC mB",
        200: "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB",
      },
      G: {
        1: "TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC",
        8: "E NC OC PC QC RC SC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC", 8: "0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 292: "A B" },
      O: { 1: "mC" },
      P: { 1: "oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "nC", 8: "I" },
      Q: { 1: "zC" },
      R: { 2: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS Grid Layout (level 1)",
  };
});
var r = m(a()),
  { A: F, B: H, C: I } = r,
  { default: l, ...p } = r,
  L = l !== void 0 ? l : p;
export { F as A, H as B, I as C, L as default };
