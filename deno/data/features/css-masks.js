/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-masks) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty;
var E = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var F = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of S(B)) {
      !D.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = p(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  e,
) => (e = C != null ? m(l(C)) : {},
  F(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = E((M, s) => {
  s.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "2": "C K L G M",
        "164": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "3138": "N",
        "12292": "O",
      },
      C: {
        "1":
          "KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB",
        "260":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB vB wB",
      },
      D: {
        "164":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "1": "qB 8B",
        "2": "0B nB",
        "164": "I l J D E F A B C K L G 1B 2B 3B 4B oB hB iB 5B 6B 7B pB",
      },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "164":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "1": "qB",
        "164":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB",
      },
      H: { "2": "YC" },
      I: { "164": "H dC eC", "676": "jB I ZC aC bC cC sB" },
      J: { "164": "D A" },
      K: { "2": "A B C hB rB iB", "164": "Y" },
      L: { "164": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "164": "fC" },
      P: { "164": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "164": "rC" },
      R: { "164": "sC" },
      S: { "260": "tC" },
    },
    B: 4,
    C: "CSS Masks",
  };
});
var a = f(t()),
  d = f(t()),
  { A: c, B: i, C: J } = d,
  { default: G, ...H } = d,
  K = a.default ?? G ?? H;
export { c as A, i as B, J as C, K as default };
