/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-boxdecorationbreak) es2022 production */
var p = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of S(B)) {
      !i.call(C, e) && e !== o && A(C, e, {
        get: () => B[e],
        enumerable: !(r = s(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var a = (
  C,
  B,
  o,
) => (o = C != null ? p(c(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var t = l((H, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "2": "C K L G M N O",
        "164": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y vB wB",
      },
      D: {
        "2": "I l J D E F A B C K L G M N O m n o",
        "164":
          "0 1 2 3 4 5 6 7 8 9 p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "2": "I l J 0B nB 1B",
        "164": "D E F A B C K L G 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "2": "F 9B AC BC CC",
        "129": "B C hB rB DC iB",
        "164":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "2": "nB EC sB FC GC",
        "164": "E HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "132": "YC" },
      I: { "2": "jB I ZC aC bC cC sB", "164": "H dC eC" },
      J: { "2": "D", "164": "A" },
      K: { "2": "A", "129": "B C hB rB iB", "164": "Y" },
      L: { "164": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "164": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "164": "rC" },
      R: { "164": "sC" },
      S: { "1": "tC" },
    },
    B: 5,
    C: "CSS box-decoration-break",
  };
});
var f = a(t()),
  m = a(t()),
  { A: I, B: b, C: n } = m,
  { default: E, ...F } = m,
  J = f.default ?? E ?? F;
export { b as B, I as A, J as default, n as C };
