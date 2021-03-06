/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/font-kerning) es2022 production */
var n = Object.create;
var f = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !i.call(C, o) && o !== e && f(C, o, {
        get: () => B[o],
        enumerable: !(r = p(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  e,
) => (e = C != null ? n(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? f(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = l((H, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L G M N O",
      },
      C: {
        "1":
          "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l J D E F A B C K L G M N O m n o p q vB wB",
        "194": "0 r s t u v w x y z",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N O m n o p q r s t u v",
        "33": "w x y z",
      },
      E: {
        "1": "A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l J 0B nB 1B 2B",
        "33": "D E F 3B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C G 9B AC BC CC hB rB DC iB",
        "33": "M N O m",
      },
      G: {
        "1": "PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB FC GC HC",
        "33": "E IC JC KC LC MC NC OC",
      },
      H: { "2": "YC" },
      I: { "1": "H eC", "2": "jB I ZC aC bC cC sB", "33": "dC" },
      J: { "2": "D", "33": "A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS3 font-kerning",
  };
});
var a = A(t()),
  m = A(t()),
  { A: I, B: c, C: J } = m,
  { default: E, ...F } = m,
  K = a.default ?? E ?? F;
export { c as B, I as A, J as C, K as default };
