/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-appearance) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of S(B)) {
      !l.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = s(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var a = (
  C,
  B,
  e,
) => (e = C != null ? m(c(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = D((I, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "T U V W Z a b c d e f g h i j X k H",
        "33": "S",
        "164": "P Q R",
        "388": "C K L G M N O",
      },
      C: {
        "1": "Q R mB S T U V W Z a b c d e f g h i j X k H",
        "164":
          "2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P",
        "676":
          "0 1 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z vB wB",
      },
      D: {
        "1": "T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33": "S",
        "164":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R",
      },
      E: {
        "1": "qB 8B",
        "164": "I l J D E F A B C K L G 0B nB 1B 2B 3B 4B oB hB iB 5B 6B 7B pB",
      },
      F: {
        "1": "bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33": "YB ZB aB",
        "164":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB",
      },
      G: {
        "1": "qB",
        "164":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "164": "jB I ZC aC bC cC sB dC eC" },
      J: { "164": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A", "388": "B" },
      O: { "164": "fC" },
      P: { "164": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "164": "rC" },
      R: { "164": "sC" },
      S: { "164": "tC" },
    },
    B: 5,
    C: "CSS Appearance",
  };
});
var p = a(t()),
  d = a(t()),
  { A: i, B: n, C: J } = d,
  { default: F, ...G } = d,
  K = p.default ?? F ?? G;
export { i as A, J as C, K as default, n as B };
