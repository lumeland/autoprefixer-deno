/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-placeholder-shown) es2022 production */
var l = Object.create;
var s = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of c(B)) {
      !S.call(C, o) && o !== e && s(C, o, {
        get: () => B[o],
        enumerable: !(r = p(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  e,
) => (e = C != null ? l(m(C)) : {},
  E(
    B || !C || !C.__esModule
      ? s(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = D((I, A) => {
  A.exports = {
    A: {
      A: { "2": "J D E F tB", "292": "A B" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L G M N O",
      },
      C: {
        "1":
          "IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB vB wB",
        "164":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB",
      },
      D: {
        "1":
          "EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l J D E 0B nB 1B 2B 3B",
      },
      F: {
        "1":
          "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2":
          "0 F B C G M N O m n o p q r s t u v w x y z 9B AC BC CC hB rB DC iB",
      },
      G: {
        "1": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "E nB EC sB FC GC HC IC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "2": "I" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "164": "tC" },
    },
    B: 5,
    C: ":placeholder-shown CSS pseudo-class",
  };
});
var a = d(t()),
  f = d(t()),
  { A: h, B: i, C: n } = f,
  { default: F, ...G } = f,
  u = a.default ?? F ?? G;
export { h as A, i as B, n as C, u as default };
