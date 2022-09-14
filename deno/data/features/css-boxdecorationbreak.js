/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-boxdecorationbreak) es2022 production */
var n = Object.create;
var a = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var b = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !S.call(C, o) && o !== e && a(C, o, {
        get: () => B[o],
        enumerable: !(t = l(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? n(u(C)) : {},
  c(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var r = b((x, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N O",
        164: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z 3B 4B",
      },
      D: {
        2: "I p J D E F A B C K L G M N O q r s",
        164:
          "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        2: "I p J 7B tB 8B",
        164: "D E F A B C K L G 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
      },
      F: {
        2: "F GC HC IC JC",
        129: "B C lB zB KC mB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        2: "tB LC 0B MC NC",
        164:
          "E OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 132: "fC" },
      I: { 2: "oB I gC hC iC jC 0B", 164: "H kC lC" },
      J: { 2: "D", 164: "A" },
      K: { 2: "A", 129: "B C lB zB mB", 164: "b" },
      L: { 164: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 164: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 164: "zC" },
      R: { 164: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS box-decoration-break",
  };
});
var f = i(r()),
  { A: D, B: E, C: F } = f,
  { default: A, ...m } = f,
  G = A !== void 0 ? A : m;
export { D as A, E as B, F as C, G as default };
