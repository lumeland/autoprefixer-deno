/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-any-link) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, r) => {
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
) => (e = C != null ? s(S(C)) : {},
  n(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = i((G, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L G M N O",
      },
      C: {
        "1":
          "HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "16": "uB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB vB wB",
      },
      D: {
        "1":
          "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "16": "I l J D E F A B C K L",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "16": "I l J 0B nB 1B",
        "33": "D E 2B 3B",
      },
      F: {
        "1":
          "JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
      },
      G: {
        "1": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "16": "nB EC sB FC",
        "33": "E GC HC IC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "16": "jB I ZC aC bC cC sB", "33": "dC eC" },
      J: { "16": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "33": "fC" },
      P: { "1": "kC oB lC mC nC oC pC qC", "16": "I", "33": "gC hC iC jC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "33": "tC" },
    },
    B: 5,
    C: "CSS :any-link selector",
  };
});
var d = f(t()),
  l = f(t()),
  { A: H, B: I, C: J } = l,
  { default: D, ...E } = l,
  K = d.default ?? D ?? E;
export { H as A, I as B, J as C, K as default };
