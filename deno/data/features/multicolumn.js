/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/multicolumn) es2022 production */
var f = Object.create;
var l = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var s = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of r(B)) {
      !p.call(C, t) && t !== e && l(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  e,
) => (e = C != null ? f(m(C)) : {},
  S(
    B || !C || !C.__esModule
      ? l(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = s((E, u) => {
  u.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F 1B" },
      B: {
        1: "C K L G M N O",
        516: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        132: "NB OB PB QB RB SB TB pB UB qB VB WB b",
        164:
          "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB 3B 4B",
        516:
          "XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c",
        1028: "d e f g h i j k l m n o a H sB",
      },
      D: {
        420:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
        516:
          "LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        1: "A B C K L G uB lB mB CC DC EC vB wB xB yB nB FC",
        132: "F BC",
        164: "D E AC",
        420: "I p J 7B tB 8B 9B",
      },
      F: {
        1: "C lB zB KC mB",
        2: "F B GC HC IC JC",
        420: "0 1 2 3 4 5 6 7 G M N O q r s t u v w x y z",
        516:
          "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        1: "SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        132: "QC RC",
        164: "E OC PC",
        420: "tB LC 0B MC NC",
      },
      H: { 1: "fC" },
      I: { 420: "oB I gC hC iC jC 0B kC lC", 516: "H" },
      J: { 420: "D A" },
      K: { 1: "C lB zB mB", 2: "A B", 516: "b" },
      L: { 516: "H" },
      M: { 516: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 420: "I" },
      Q: { 132: "zC" },
      R: { 132: "0C" },
      S: { 164: "1C" },
    },
    B: 4,
    C: "CSS3 Multiple column layout",
  };
});
var d = c(A()),
  { A: F, B: G, C: H } = d,
  { default: a, ...i } = d,
  I = a !== void 0 ? a : i;
export { F as A, G as B, H as C, I as default };
