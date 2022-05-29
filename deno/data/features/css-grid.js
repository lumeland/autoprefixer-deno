/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-grid) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var G = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !S.call(C, o) && o !== e && A(C, o, {
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
) => (e = C != null ? m(G(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = i((I, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E tB", "8": "F", "292": "A B" },
      B: {
        "1": "M N O P Q R S T U V W Z a b c d e f g h i j X k H",
        "292": "C K L G",
      },
      C: {
        "1":
          "LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l J D E F A B C K L G M N O vB wB",
        "8": "0 1 2 3 4 5 6 m n o p q r s t u v w x y z",
        "584": "7 8 9 AB BB CB DB EB FB GB HB IB",
        "1025": "JB KB",
      },
      D: {
        "1":
          "PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N O m n o p q r",
        "8": "s t u v",
        "200":
          "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
        "1025": "OB",
      },
      E: {
        "1": "B C K L G oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l 0B nB 1B",
        "8": "J D E F A 2B 3B 4B",
      },
      F: {
        "1":
          "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C G M N O m n o p q r s t u 9B AC BC CC hB rB DC iB",
        "200": "0 1 2 3 4 5 6 7 8 9 v w x y z AB",
      },
      G: {
        "1": "MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB FC",
        "8": "E GC HC IC JC KC LC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC", "8": "sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "292": "A B" },
      O: { "1": "fC" },
      P: { "1": "hC iC jC kC oB lC mC nC oC pC qC", "2": "gC", "8": "I" },
      Q: { "1": "rC" },
      R: { "2": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS Grid Layout (level 1)",
  };
});
var a = d(t()),
  l = d(t()),
  { A: L, B: c, C: u } = l,
  { default: E, ...F } = l,
  J = a.default ?? E ?? F;
export { c as B, J as default, L as A, u as C };
