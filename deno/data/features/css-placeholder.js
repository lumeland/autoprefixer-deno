/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-placeholder) es2022 production */
var a = Object.create;
var d = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !c.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(r = m(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  e,
) => (e = C != null ? a(S(C)) : {},
  E(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = D((I, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "36": "C K L G M N O",
      },
      C: {
        "1":
          "IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l J D E F A B C K L G M N O vB wB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB",
      },
      D: {
        "1":
          "OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "36":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
      },
      E: {
        "1": "B C K L G oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I 0B nB",
        "36": "l J D E F A 1B 2B 3B 4B",
      },
      F: {
        "1":
          "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "36": "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB",
      },
      G: {
        "1": "MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC",
        "36": "E sB FC GC HC IC JC KC LC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "36": "jB I ZC aC bC cC sB dC eC" },
      J: { "36": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "36": "A B" },
      O: { "1": "fC" },
      P: { "1": "iC jC kC oB lC mC nC oC pC qC", "36": "I gC hC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "33": "tC" },
    },
    B: 5,
    C: "::placeholder CSS pseudo-element",
  };
});
var l = A(t()),
  p = A(t()),
  { A: i, B: n, C: u } = p,
  { default: F, ...G } = p,
  J = l.default ?? F ?? G;
export { i as A, J as default, n as B, u as C };
