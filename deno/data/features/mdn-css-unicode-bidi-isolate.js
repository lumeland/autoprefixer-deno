/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/mdn-css-unicode-bidi-isolate) es2022 production */
var l = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, A = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !A.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = n(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? l(u(C)) : {},
  m(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var i = c((G, a) => {
  a.exports = {
    A: {
      D: {
        1: "JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F A B C K L G",
        33:
          "0 1 2 3 4 5 6 7 8 9 M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
      },
      L: { 1: "H" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F 3B 4B",
        33:
          "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
      },
      M: { 1: "a" },
      A: { 2: "J D E F A B 1B" },
      F: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
        33: "0 1 2 3 4 5 G M N O q r s t u v w x y z",
      },
      K: { 1: "b", 2: "A B C lB zB mB" },
      E: {
        1: "B C K L G lB mB CC DC EC vB wB xB yB nB",
        2: "I p 7B tB 8B FC",
        33: "J D E F A 9B AC BC uB",
      },
      G: {
        1: "UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC",
        33: "E NC OC PC QC RC SC TC",
      },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
    },
    B: 6,
    C: "isolate from unicode-bidi",
  };
});
var f = p(i()),
  { A: I, B: b, C: x } = f,
  { default: r, ...E } = f,
  D = r !== void 0 ? r : E;
export { b as B, D as default, I as A, x as C };
