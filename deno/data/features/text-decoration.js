/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/text-decoration) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of s(B)) {
      !u.call(C, e) && e !== t && d(C, e, {
        get: () => B[e],
        enumerable: !(o = l(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  t,
) => (t = C != null ? f(i(C)) : {},
  m(
    B || !C || !C.__esModule
      ? d(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var a = c((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N O",
        2052: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        2: "2B oB I p 3B 4B",
        1028:
          "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        1060: "0 1 2 3 4 5 6 J D E F A B C K L G M N O q r s t u v w x y z",
      },
      D: {
        2: "I p J D E F A B C K L G M N O q r s t u v w",
        226:
          "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB",
        2052:
          "SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        2: "I p J D 7B tB 8B 9B",
        772: "K L G mB CC DC EC vB wB xB yB nB FC",
        804: "E F A B C BC uB lB",
        1316: "AC",
      },
      F: {
        2: "0 1 2 3 4 5 F B C G M N O q r s t u v w x y z GC HC IC JC lB zB KC mB",
        226: "6 7 8 9 AB BB CB DB EB",
        2052:
          "FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        2: "tB LC 0B MC NC OC",
        292: "E PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 2052: "H" },
      M: { 1028: "a" },
      N: { 2: "A B" },
      O: { 2052: "mC" },
      P: { 2: "I nC oC", 2052: "pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 2: "zC" },
      R: { 1: "0C" },
      S: { 1028: "1C" },
    },
    B: 4,
    C: "text-decoration styling",
  };
});
var r = p(a()),
  { A: F, B: G, C: H } = r,
  { default: n, ...x } = r,
  I = n !== void 0 ? n : x;
export { F as A, G as B, H as C, I as default };
