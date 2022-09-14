/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css3-cursors-grab) es2022 production */
var f = Object.create;
var o = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let r of u(B)) {
      !l.call(C, r) && r !== e && o(C, r, {
        get: () => B[r],
        enumerable: !(t = n(B, r)) || t.enumerable,
      });
    }
  }
  return C;
};
var g = (
  C,
  B,
  e,
) => (e = C != null ? f(b(C)) : {},
  c(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = S((p, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        33: "2B oB I p J D E F A B C K L G M N O q r s t u v w x 3B 4B",
      },
      D: {
        1: "aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB",
      },
      E: {
        1: "B C K L G lB mB CC DC EC vB wB xB yB nB FC",
        33: "I p J D E F A 7B tB 8B 9B AC BC uB",
      },
      F: {
        1: "C QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z KC mB",
        2: "F B GC HC IC JC lB zB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
      },
      G: {
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 2: "a" },
      N: { 2: "A B" },
      O: { 2: "mC" },
      P: { 2: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 33: "zC" },
      R: { 2: "0C" },
      S: { 2: "1C" },
    },
    B: 3,
    C: "CSS grab & grabbing cursors",
  };
});
var s = g(A()),
  { A: D, B: E, C: F } = s,
  { default: d, ...i } = s,
  G = d !== void 0 ? d : i;
export { D as A, E as B, F as C, G as default };
