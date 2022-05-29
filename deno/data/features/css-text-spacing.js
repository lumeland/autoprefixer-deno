/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-text-spacing) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, t, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of S(B)) {
      !i.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(r = m(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  t,
) => (t = C != null ? s(c(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = l((H, a) => {
  a.exports = {
    A: {
      A: { "2": "J D tB", "161": "E F A B" },
      B: {
        "2": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "161": "C K L G M N O",
      },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H vB wB",
      },
      D: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "2":
          "I l J D E F A B C K L G 0B nB 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 F B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W 9B AC BC CC hB rB DC iB",
      },
      G: {
        "2":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "2": "jB I H ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "2": "A B C Y hB rB iB" },
      L: { "2": "H" },
      M: { "2": "X" },
      N: { "16": "A B" },
      O: { "2": "fC" },
      P: { "2": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "2": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 5,
    C: "CSS Text 4 text-spacing",
  };
});
var d = f(o()),
  p = f(o()),
  { A: I, B: n, C: x } = p,
  { default: E, ...F } = p,
  J = d.default ?? E ?? F;
export { I as A, J as default, n as B, x as C };
