/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-animation) es2022 production */
var i = Object.create;
var r = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, o, A) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !l.call(C, t) && t !== o && r(C, t, {
        get: () => B[t],
        enumerable: !(A = p(B, t)) || A.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  o,
) => (o = C != null ? i(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? r(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = n((H, a) => {
  a.exports = {
    A: {
      A: { "1": "A B", "2": "J D E F tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I vB wB",
        "33": "l J D E F A B C K L G",
      },
      D: {
        "1":
          "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "0B nB",
        "33": "J D E 1B 2B 3B",
        "292": "I l",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W iB",
        "2": "F B 9B AC BC CC hB rB DC",
        "33": "C G M N O m n o p q r s t u v w",
      },
      G: {
        "1": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "E GC HC IC",
        "164": "nB EC sB FC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "33": "I cC sB dC eC", "164": "jB ZC aC bC" },
      J: { "33": "D A" },
      K: { "1": "Y iB", "2": "A B C hB rB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "33": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 5,
    C: "CSS Animation",
  };
});
var d = f(e()),
  m = f(e()),
  { A: I, B: c, C: J } = m,
  { default: E, ...F } = m,
  K = d.default ?? E ?? F;
export { c as B, I as A, J as C, K as default };
