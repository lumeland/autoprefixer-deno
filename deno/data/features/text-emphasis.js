/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/text-emphasis) es2022 production */
var l = Object.create;
var s = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of r(B)) {
      !m.call(C, t) && t !== e && s(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? l(i(C)) : {},
  u(
    B || !C || !C.__esModule
      ? s(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = p((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "k l m n o a H",
        2: "C K L G M N O",
        164: "P Q R S T U V W X Y Z c d e f g h i j",
      },
      C: {
        1: "HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB 3B 4B",
        322: "GB",
      },
      D: {
        1: "k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G M N O q r s t u v",
        164:
          "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j",
      },
      E: {
        1: "E F A B C K L G AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p J 7B tB 8B",
        164: "D 9B",
      },
      F: {
        1: "V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U",
      },
      G: {
        1: "E OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC NC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B", 164: "kC lC" },
      J: { 2: "D", 164: "A" },
      K: { 2: "A B C lB zB mB", 164: "b" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 164: "mC" },
      P: { 1: "yC", 164: "I nC oC pC qC rC uB sC tC uC vC wC nB xC" },
      Q: { 164: "zC" },
      R: { 164: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "text-emphasis styling",
  };
});
var f = x(a()),
  { A: G, B: H, C: I } = f,
  { default: d, ...D } = f,
  c = d !== void 0 ? d : D;
export { c as default, G as A, H as B, I as C };
