/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-snappoints) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of m(B)) {
      !c.call(C, e) && e !== o && A(C, e, {
        get: () => B[e],
        enumerable: !(r = p(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  o,
) => (o = C != null ? l(s(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var t = D((I, S) => {
  S.exports = {
    A: {
      A: { "2": "J D E F tB", "6308": "A", "6436": "B" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "6436": "C K L G M N O",
      },
      C: {
        "1":
          "WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 3 4 5 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z vB wB",
        "2052":
          "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB",
      },
      D: {
        "1":
          "XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB",
        "8258": "UB VB WB",
      },
      E: {
        "1": "B C K L G hB iB 5B 6B 7B pB qB 8B",
        "2": "I l J D E 0B nB 1B 2B 3B",
        "3108": "F A 4B oB",
      },
      F: {
        "1": "Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2":
          "0 1 2 3 4 5 6 7 8 9 F B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB 9B AC BC CC hB rB DC iB",
        "8258": "LB MB NB OB PB QB RB SB",
      },
      G: {
        "1": "NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "E nB EC sB FC GC HC IC",
        "3108": "JC KC LC MC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "2": "fC" },
      P: { "1": "oB lC mC nC oC pC qC", "2": "I gC hC iC jC kC" },
      Q: { "2": "rC" },
      R: { "2": "sC" },
      S: { "2052": "tC" },
    },
    B: 4,
    C: "CSS Scroll Snap",
  };
});
var a = f(t()),
  d = f(t()),
  { A: i, B: n, C: J } = d,
  { default: F, ...G } = d,
  K = a.default ?? F ?? G;
export { i as A, J as C, K as default, n as B };
