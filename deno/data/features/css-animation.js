/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-animation) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !s.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = i(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? r(m(C)) : {},
  S(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = u((F, a) => {
  a.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I 3B 4B",
        33: "p J D E F A B C K L G",
      },
      D: {
        1: "EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB",
      },
      E: {
        1: "F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "7B tB",
        33: "J D E 8B 9B AC",
        292: "I p",
      },
      F: {
        1: "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z mB",
        2: "F B GC HC IC JC lB zB KC",
        33: "0 C G M N O q r s t u v w x y z",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        33: "E NC OC PC",
        164: "tB LC 0B MC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 33: "I jC 0B kC lC", 164: "oB gC hC iC" },
      J: { 33: "D A" },
      K: { 1: "b mB", 2: "A B C lB zB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 33: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS Animation",
  };
});
var f = p(d()),
  { A: G, B: H, C: I } = f,
  { default: n, ...D } = f,
  c = n !== void 0 ? n : D;
export { c as default, G as A, H as B, I as C };
