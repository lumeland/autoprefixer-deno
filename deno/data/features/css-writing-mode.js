/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-writing-mode) es2022 production */
var a = Object.create;
var A = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !l.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = i(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  e,
) => (e = C != null ? a(S(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = D((I, f) => {
  f.exports = {
    A: {
      A: { "132": "J D E F A B tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z vB wB",
        "322": "3 4 5 6 7",
      },
      D: {
        "1":
          "FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J",
        "16": "D",
        "33":
          "0 1 2 3 4 5 6 7 8 9 E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB",
      },
      E: {
        "1": "B C K L G hB iB 5B 6B 7B pB qB 8B",
        "2": "I 0B nB",
        "16": "l",
        "33": "J D E F A 1B 2B 3B 4B oB",
      },
      F: {
        "1":
          "2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33": "0 1 G M N O m n o p q r s t u v w x y z",
      },
      G: {
        "1": "NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "16": "nB EC sB",
        "33": "E FC GC HC IC JC KC LC MC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "ZC aC bC", "33": "jB I cC sB dC eC" },
      J: { "33": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "36": "A B" },
      O: { "1": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "33": "I" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS writing-mode property",
  };
});
var p = d(t()),
  m = d(t()),
  { A: c, B: n, C: J } = m,
  { default: F, ...G } = m,
  K = p.default ?? F ?? G;
export { c as A, J as C, K as default, n as B };
