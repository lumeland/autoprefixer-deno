/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-media-resolution) es2022 production */
var i = Object.create;
var f = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of m(B)) {
      !u.call(C, o) && o !== e && f(C, o, {
        get: () => B[o],
        enumerable: !(r = l(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  e,
) => (e = C != null ? i(p(C)) : {},
  E(
    B || !C || !C.__esModule
      ? f(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = D((I, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E tB", "132": "F A B" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB",
        "260": "I l J D E F A B C K L G vB wB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "548": "I l J D E F A B C K L G M N O m n o p q r s t u v",
      },
      E: {
        "1": "8B",
        "2": "0B nB",
        "548": "I l J D E F A B C K L G 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W iB",
        "2": "F",
        "548": "B C 9B AC BC CC hB rB DC",
      },
      G: {
        "16": "nB",
        "548":
          "E EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "132": "YC" },
      I: { "1": "H dC eC", "16": "ZC aC", "548": "jB I bC cC sB" },
      J: { "548": "D A" },
      K: { "1": "Y iB", "548": "A B C hB rB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "132": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 2,
    C: "Media Queries: resolution feature",
  };
});
var d = A(t()),
  s = A(t()),
  { A: M, B: Q, C: c } = s,
  { default: F, ...G } = s,
  n = d.default ?? F ?? G;
export { c as C, M as A, n as default, Q as B };
