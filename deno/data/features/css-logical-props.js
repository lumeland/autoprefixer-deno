/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-logical-props) es2022 production */
var l = Object.create;
var r = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !p.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  e,
) => (e = C != null ? l(n(C)) : {},
  S(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = u((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        1: "Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
        1028: "W X",
        1540: "P Q R S T U V",
      },
      C: {
        1: "YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B",
        164:
          "0 1 2 3 4 5 6 7 8 9 oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB 3B 4B",
        1540:
          "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB",
      },
      D: {
        1: "Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        292:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB",
        1028: "W X",
        1540: "bB cB dB eB fB gB hB iB jB kB P Q R S T U V",
      },
      E: {
        1: "G EC vB wB xB yB nB FC",
        292: "I p J D E F A B C 7B tB 8B 9B AC BC uB lB",
        1028: "DC",
        1540: "K L mB CC",
      },
      F: {
        1: "iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        292:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB",
        1028: "gB hB",
        1540: "RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB",
      },
      G: {
        1: "eC vB wB xB yB nB",
        292: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC",
        1028: "dC",
        1540: "XC YC ZC aC bC cC",
      },
      H: { 2: "fC" },
      I: { 1: "H", 292: "oB I gC hC iC jC 0B kC lC" },
      J: { 292: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 292: "mC" },
      P: { 1: "wC nB xC yC", 292: "I nC oC pC qC rC", 1540: "uB sC tC uC vC" },
      Q: { 1540: "zC" },
      R: { 1540: "0C" },
      S: { 1540: "1C" },
    },
    B: 5,
    C: "CSS Logical Properties",
  };
});
var f = c(a()),
  { A: F, B: G, C: H } = f,
  { default: d, ...m } = f,
  I = d !== void 0 ? d : m;
export { F as A, G as B, H as C, I as default };
