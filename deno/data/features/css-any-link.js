/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-any-link) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
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
) => (e = C != null ? r(u(C)) : {},
  i(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = c((E, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        16: "2B",
        33:
          "0 1 2 3 4 5 6 7 8 9 oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB 3B 4B",
      },
      D: {
        1: "XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        16: "I p J D E F A B C K L",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b",
      },
      E: {
        1: "F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB FC",
        16: "I p J 7B tB 8B",
        33: "D E 9B AC",
      },
      F: {
        1: "NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        16: "tB LC 0B MC",
        33: "E NC OC PC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 16: "oB I gC hC iC jC 0B", 33: "kC lC" },
      J: { 16: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 33: "mC" },
      P: { 1: "rC uB sC tC uC vC wC nB xC yC", 16: "I", 33: "nC oC pC qC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 33: "1C" },
    },
    B: 5,
    C: "CSS :any-link selector",
  };
});
var n = m(d()),
  { A: F, B: G, C: H } = n,
  { default: l, ...p } = n,
  I = l !== void 0 ? l : p;
export { F as A, G as B, H as C, I as default };
