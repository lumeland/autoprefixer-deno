/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/border-image) es2022 production */
var s = Object.create;
var d = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of m(B)) {
      !u.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(n(C)) : {},
  i(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = S((F, r) => {
  r.exports = {
    A: {
      A: { 1: "B", 2: "J D E F A 1B" },
      B: {
        1: "L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        129: "C K",
      },
      C: {
        1: "LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB",
        260:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
        804: "I p J D E F A B C K L 3B 4B",
      },
      D: {
        1: "RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        260: "MB NB OB PB QB",
        388: "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB",
        1412: "0 G M N O q r s t u v w x y z",
        1956: "I p J D E F A B C K L",
      },
      E: {
        1: "wB xB yB nB FC",
        129: "A B C K L G BC uB lB mB CC DC EC vB",
        1412: "J D E F 9B AC",
        1956: "I p 7B tB 8B",
      },
      F: {
        1: "EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F GC HC",
        260: "9 AB BB CB DB",
        388: "0 1 2 3 4 5 6 7 8 G M N O q r s t u v w x y z",
        1796: "IC JC",
        1828: "B C lB zB KC mB",
      },
      G: {
        1: "wB xB yB nB",
        129: "RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB",
        1412: "E NC OC PC QC",
        1956: "tB LC 0B MC",
      },
      H: { 1828: "fC" },
      I: { 1: "H", 388: "kC lC", 1956: "oB I gC hC iC jC 0B" },
      J: { 1412: "A", 1924: "D" },
      K: { 1: "b", 2: "A", 1828: "B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "B", 2: "A" },
      O: { 388: "mC" },
      P: { 1: "pC qC rC uB sC tC uC vC wC nB xC yC", 260: "nC oC", 388: "I" },
      Q: { 260: "zC" },
      R: { 260: "0C" },
      S: { 260: "1C" },
    },
    B: 4,
    C: "CSS3 Border images",
  };
});
var f = p(A()),
  { A: G, B: H, C: I } = f,
  { default: a, ...D } = f,
  c = a !== void 0 ? a : D;
export { c as default, G as A, H as B, I as C };
