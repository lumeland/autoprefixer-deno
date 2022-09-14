/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-featurequeries) es2022 production */
var f = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, F = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !F.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? f(n(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F A B C K L G M N O q r s 3B 4B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N O q r s t u v w x y",
      },
      E: {
        1: "F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p J D E 7B tB 8B 9B AC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z mB",
        2: "F B C GC HC IC JC lB zB KC",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "E tB LC 0B MC NC OC PC",
      },
      H: { 1: "fC" },
      I: { 1: "H kC lC", 2: "oB I gC hC iC jC 0B" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS Feature Queries",
  };
});
var u = m(a()),
  { A: G, B: H, C: I } = u,
  { default: d, ...p } = u,
  Q = d !== void 0 ? d : p;
export { G as A, H as B, I as C, Q as default };
