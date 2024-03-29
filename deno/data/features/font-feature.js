/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/font-feature) es2022 production */
var r = Object.create;
var f = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !S.call(C, t) && t !== e && f(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? r(l(C)) : {},
  m(
    B || !C || !C.__esModule
      ? f(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = i((F, A) => {
  A.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B 4B",
        33: "0 1 2 3 4 G M N O q r s t u v w x y z",
        164: "I p J D E F A B C K L",
      },
      D: {
        1: "JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G",
        33: "0 1 2 3 4 5 6 7 8 9 s t u v w x y z AB BB CB DB EB FB GB HB IB",
        292: "M N O q r",
      },
      E: {
        1: "A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "D E F 7B tB 9B AC",
        4: "I p J 8B",
      },
      F: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33: "0 1 2 3 4 5 G M N O q r s t u v w x y z",
      },
      G: {
        1: "RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "E OC PC QC",
        4: "tB LC 0B MC NC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B", 33: "kC lC" },
      J: { 2: "D", 33: "A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 33: "I" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS font-feature-settings",
  };
});
var n = p(a()),
  { A: G, B: H, C: I } = n,
  { default: d, ...D } = n,
  c = d !== void 0 ? d : D;
export { c as default, G as A, H as B, I as C };
