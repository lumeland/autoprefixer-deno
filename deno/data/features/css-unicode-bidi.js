/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-unicode-bidi) es2022 production */
var a = Object.create;
var d = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !c.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(r = m(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  e,
) => (e = C != null ? a(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = l((H, f) => {
  f.exports = {
    A: {
      A: { "132": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "132": "C K L G M N O",
      },
      C: {
        "1":
          "HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "33":
          "0 1 2 3 4 5 6 7 8 9 N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB",
        "132": "uB jB I l J D E F vB wB",
        "292": "A B C K L G M",
      },
      D: {
        "1":
          "FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "132": "I l J D E F A B C K L G M",
        "548":
          "0 1 2 3 4 5 6 7 8 9 N O m n o p q r s t u v w x y z AB BB CB DB EB",
      },
      E: {
        "132": "I l J D E 0B nB 1B 2B 3B",
        "548": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "132":
          "0 1 2 3 4 5 6 7 8 9 F B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W 9B AC BC CC hB rB DC iB",
      },
      G: {
        "132": "E nB EC sB FC GC HC IC",
        "548": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "16": "YC" },
      I: { "1": "H", "16": "jB I ZC aC bC cC sB dC eC" },
      J: { "16": "D A" },
      K: { "1": "Y", "16": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "132": "A B" },
      O: { "16": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "16": "I" },
      Q: { "16": "rC" },
      R: { "16": "sC" },
      S: { "33": "tC" },
    },
    B: 4,
    C: "CSS unicode-bidi property",
  };
});
var p = A(t()),
  i = A(t()),
  { A: I, B: n, C: u } = i,
  { default: E, ...F } = i,
  J = p.default ?? E ?? F;
export { I as A, J as default, n as B, u as C };
