/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-hyphens) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var H = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of p(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? r(s(C)) : {},
  S(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = H((E, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F 1B", 33: "A B" },
      B: {
        33: "C K L G M N O",
        132: "P Q R S T U V W",
        260: "X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p 3B 4B",
        33:
          "0 1 2 3 4 5 6 7 8 9 J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB",
      },
      D: {
        1: "X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
        132:
          "QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W",
      },
      E: {
        2: "I p 7B tB",
        33:
          "J D E F A B C K L G 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB BB CB GC HC IC JC lB zB KC mB",
        132:
          "DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        2: "tB LC",
        33:
          "E 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 4: "mC" },
      P: { 1: "oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I", 132: "nC" },
      Q: { 2: "zC" },
      R: { 132: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS Hyphenation",
  };
});
var f = i(d()),
  { A: F, B: G, C: I } = f,
  { default: n, ...m } = f,
  c = n !== void 0 ? n : m;
export { c as default, F as A, G as B, I as C };
