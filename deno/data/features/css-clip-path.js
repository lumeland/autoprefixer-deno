/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-clip-path) es2022 production */
var f = Object.create;
var r = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var H = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !u.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  e,
) => (e = C != null ? f(s(C)) : {},
  S(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = H((D, p) => {
  p.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N",
        260: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        3138: "O",
      },
      C: {
        1: "PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB",
        132:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB 3B 4B",
        644: "IB JB KB LB MB NB OB",
      },
      D: {
        2: "I p J D E F A B C K L G M N O q r s t u",
        260:
          "QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        292:
          "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
      },
      E: {
        2: "I p J 7B tB 8B 9B",
        260: "L G CC DC EC vB wB xB yB nB FC",
        292: "D E F A B C K AC BC uB lB mB",
      },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        260:
          "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        292: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB",
      },
      G: {
        2: "tB LC 0B MC NC",
        260: "YC ZC aC bC cC dC eC vB wB xB yB nB",
        292: "E OC PC QC RC SC TC UC VC WC XC",
      },
      H: { 2: "fC" },
      I: { 2: "oB I gC hC iC jC 0B", 260: "H", 292: "kC lC" },
      J: { 2: "D A" },
      K: { 2: "A B C lB zB mB", 260: "b" },
      L: { 260: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 292: "mC" },
      P: { 292: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 292: "zC" },
      R: { 260: "0C" },
      S: { 644: "1C" },
    },
    B: 4,
    C: "CSS clip-path property (for HTML)",
  };
});
var d = c(A()),
  { A: E, B: F, C: G } = d,
  { default: a, ...i } = d,
  I = a !== void 0 ? a : i;
export { E as A, F as B, G as C, I as default };
