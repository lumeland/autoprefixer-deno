/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-hyphens) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var H = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of H(B)) {
      !i.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = s(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  e,
) => (e = C != null ? m(S(C)) : {},
  n(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = l((G, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E F tB", "33": "A B" },
      B: {
        "33": "C K L G M N O",
        "132": "P Q R S T U V W",
        "260": "Z a b c d e f g h i j X k H",
      },
      C: {
        "1":
          "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l vB wB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 J D E F A B C K L G M N O m n o p q r s t u v w x y z",
      },
      D: {
        "1": "Z a b c d e f g h i j X k H xB yB zB",
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB",
        "132":
          "MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W",
      },
      E: {
        "2": "I l 0B nB",
        "33": "J D E F A B C K L G 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "2":
          "0 1 2 3 4 5 6 7 8 F B C G M N O m n o p q r s t u v w x y z 9B AC BC CC hB rB DC iB",
        "132":
          "9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "2": "nB EC",
        "33":
          "E sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "4": "fC" },
      P: { "1": "hC iC jC kC oB lC mC nC oC pC qC", "2": "I", "132": "gC" },
      Q: { "2": "rC" },
      R: { "132": "sC" },
      S: { "1": "tC" },
    },
    B: 5,
    C: "CSS Hyphenation",
  };
});
var d = f(t()),
  p = f(t()),
  { A: I, B: c, C: J } = p,
  { default: D, ...E } = p,
  K = d.default ?? D ?? E;
export { c as B, I as A, J as C, K as default };
