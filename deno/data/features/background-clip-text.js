/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/background-clip-text) es2022 production */
var c = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, t, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of m(B)) {
      !i.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(r = l(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  t,
) => (t = C != null ? c(s(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = D((I, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "G M N O",
        "33": "C K L P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "1":
          "GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB vB wB",
      },
      D: {
        "33":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "1": "L G 6B 7B pB qB 8B",
        "16": "0B nB",
        "33": "I l J D E F A B C K 1B 2B 3B 4B oB hB iB 5B",
      },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "1": "VC WC XC pB qB",
        "16": "nB EC sB FC",
        "33": "E GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC",
      },
      H: { "2": "YC" },
      I: { "16": "jB ZC aC bC", "33": "I H cC sB dC eC" },
      J: { "33": "D A" },
      K: { "16": "A B C hB rB iB", "33": "Y" },
      L: { "33": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "33": "fC" },
      P: { "33": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "33": "rC" },
      R: { "33": "sC" },
      S: { "1": "tC" },
    },
    B: 7,
    C: "Background-clip: text",
  };
});
var a = d(o()),
  p = d(o()),
  { A: n, B: u, C: J } = p,
  { default: F, ...G } = p,
  K = a.default ?? F ?? G;
export { J as C, K as default, n as A, u as B };
