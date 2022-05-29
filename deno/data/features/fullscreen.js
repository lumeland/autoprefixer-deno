/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/fullscreen) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var F = Object.getPrototypeOf, I = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !I.call(C, o) && o !== e && A(C, o, {
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
) => (e = C != null ? m(F(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = c((P, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F A tB", "548": "B" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "516": "C K L G M N O",
      },
      C: {
        "1":
          "Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l J D E F vB wB",
        "676":
          "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB",
        "1700": "EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB",
      },
      D: {
        "1":
          "ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L",
        "676": "G M N O m",
        "804":
          "0 1 2 3 4 5 6 7 8 9 n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB",
      },
      E: {
        "2": "I l 0B nB",
        "548": "qB 8B",
        "676": "1B",
        "804": "J D E F A B C K L G 2B 3B 4B oB hB iB 5B 6B 7B pB",
      },
      F: {
        "1":
          "Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W iB",
        "2": "F B C 9B AC BC CC hB rB DC",
        "804":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB",
      },
      G: {
        "2": "E nB EC sB FC GC HC IC JC KC LC MC NC OC",
        "2052": "PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "2": "jB I H ZC aC bC cC sB dC eC" },
      J: { "2": "D", "292": "A" },
      K: { "2": "A B C Y hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A", "548": "B" },
      O: { "804": "fC" },
      P: { "1": "oB lC mC nC oC pC qC", "804": "I gC hC iC jC kC" },
      Q: { "804": "rC" },
      R: { "804": "sC" },
      S: { "1": "tC" },
    },
    B: 1,
    C: "Full Screen API",
  };
});
var l = f(t()),
  a = f(t()),
  { A: S, B: i, C: n } = a,
  { default: E, ...G } = a,
  u = l.default ?? E ?? G;
export { i as B, n as C, S as A, u as default };
