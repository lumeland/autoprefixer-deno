/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-appearance) es2022 production */
var n = Object.create;
var a = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, A) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !u.call(C, t) && t !== e && a(C, t, {
        get: () => B[t],
        enumerable: !(A = p(B, t)) || A.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? n(s(C)) : {},
  c(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((F, o) => {
  o.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "T U V W X Y Z c d e f g h i j k l m n o a H",
        33: "S",
        164: "P Q R",
        388: "C K L G M N O",
      },
      C: {
        1: "Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        164:
          "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P",
        676:
          "0 1 2 3 4 5 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z 3B 4B",
      },
      D: {
        1: "T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "S",
        164:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R",
      },
      E: {
        1: "wB xB yB nB FC",
        164: "I p J D E F A B C K L G 7B tB 8B 9B AC BC uB lB mB CC DC EC vB",
      },
      F: {
        1: "fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33: "cB dB eB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB",
      },
      G: {
        1: "wB xB yB nB",
        164:
          "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 164: "oB I gC hC iC jC 0B kC lC" },
      J: { 164: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A", 388: "B" },
      O: { 164: "mC" },
      P: { 164: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 164: "zC" },
      R: { 164: "0C" },
      S: { 164: "1C" },
    },
    B: 5,
    C: "CSS Appearance",
  };
});
var f = m(d()),
  { A: G, B: H, C: I } = f,
  { default: r, ...D } = f,
  i = r !== void 0 ? r : D;
export { G as A, H as B, I as C, i as default };
