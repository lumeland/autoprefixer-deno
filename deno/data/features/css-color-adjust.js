/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-color-adjust) es2022 production */
var l = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of s(B)) {
      !p.call(C, e) && e !== t && d(C, e, {
        get: () => B[e],
        enumerable: !(o = n(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  t,
) => (t = C != null ? l(u(C)) : {},
  c(
    B || !C || !C.__esModule
      ? d(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var A = S((E, r) => {
  r.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB 3B 4B",
      },
      D: {
        16: "I p J D E F A B C K L G M N O",
        33:
          "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        2: "I p 7B tB 8B",
        33: "J D E F A B C K L G 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
      },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        16:
          "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 16: "oB I gC hC iC jC 0B kC lC", 33: "H" },
      J: { 16: "D A" },
      K: { 2: "A B C lB zB mB", 33: "b" },
      L: { 16: "H" },
      M: { 1: "a" },
      N: { 16: "A B" },
      O: { 16: "mC" },
      P: { 16: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 33: "zC" },
      R: { 16: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS print-color-adjust",
  };
});
var f = i(A()),
  { A: F, B: G, C: H } = f,
  { default: a, ...m } = f,
  I = a !== void 0 ? a : m;
export { F as A, G as B, H as C, I as default };
