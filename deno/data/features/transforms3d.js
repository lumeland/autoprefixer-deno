/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/transforms3d) es2022 production */
var s = Object.create;
var r = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !u.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(m(C)) : {},
  S(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = D((G, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F 1B", 132: "A B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F 3B 4B",
        33: "A B C K L G",
      },
      D: {
        1: "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B",
        33: "0 1 2 3 4 5 6 C K L G M N O q r s t u v w x y z",
      },
      E: {
        1: "wB xB yB nB FC",
        2: "7B tB",
        33: "I p J D E 8B 9B AC",
        257: "F A B C K L G BC uB lB mB CC DC EC vB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33: "G M N O q r s t",
      },
      G: {
        1: "wB xB yB nB",
        33: "E tB LC 0B MC NC OC PC",
        257: "QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "gC hC iC", 33: "oB I jC 0B kC lC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS3 3D Transforms",
  };
});
var f = p(a()),
  { A: H, B: I, C: c } = f,
  { default: d, ...E } = f,
  i = d !== void 0 ? d : E;
export { c as C, H as A, I as B, i as default };
