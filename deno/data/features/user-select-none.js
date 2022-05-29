/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/user-select-none) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of p(B)) {
      !c.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = m(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  e,
) => (e = C != null ? l(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = n((H, s) => {
  s.exports = {
    A: {
      A: { "2": "J D E F tB", "33": "A B" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "33": "C K L G M N O",
      },
      C: {
        "1":
          "XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "33":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB vB wB",
      },
      D: {
        "1":
          "LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
      },
      E: {
        "33":
          "I l J D E F A B C K L G 0B nB 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "1":
          "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33": "0 1 2 3 4 5 6 7 G M N O m n o p q r s t u v w x y z",
      },
      G: {
        "33":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "33": "jB I ZC aC bC cC sB dC eC" },
      J: { "33": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "33": "A B" },
      O: { "2": "fC" },
      P: { "1": "hC iC jC kC oB lC mC nC oC pC qC", "33": "I gC" },
      Q: { "1": "rC" },
      R: { "2": "sC" },
      S: { "33": "tC" },
    },
    B: 5,
    C: "CSS user-select: none",
  };
});
var d = f(t()),
  a = f(t()),
  { A: I, B: i, C: u } = a,
  { default: E, ...F } = a,
  J = d.default ?? E ?? F;
export { I as A, i as B, J as default, u as C };
