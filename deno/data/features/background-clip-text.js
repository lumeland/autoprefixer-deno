/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/background-clip-text) es2022 production */
var l = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var s = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !p.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? l(c(C)) : {},
  i(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = s((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "G M N O",
        33: "C K L P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB 3B 4B",
      },
      D: {
        33:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        1: "L G DC EC vB wB xB yB nB FC",
        16: "7B tB",
        33: "I p J D E F A B C K 8B 9B AC BC uB lB mB CC",
      },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        1: "cC dC eC vB wB xB yB nB",
        16: "tB LC 0B MC",
        33: "E NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC",
      },
      H: { 2: "fC" },
      I: { 16: "oB gC hC iC", 33: "I H jC 0B kC lC" },
      J: { 33: "D A" },
      K: { 16: "A B C lB zB mB", 33: "b" },
      L: { 33: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 33: "mC" },
      P: { 33: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 33: "zC" },
      R: { 33: "0C" },
      S: { 1: "1C" },
    },
    B: 7,
    C: "Background-clip: text",
  };
});
var f = m(a()),
  { A: F, B: G, C: H } = f,
  { default: r, ...x } = f,
  I = r !== void 0 ? r : x;
export { F as A, G as B, H as C, I as default };
