/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-logical-props) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of l(B)) {
      !S.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = i(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  e,
) => (e = C != null ? s(m(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = c((H, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "a b c d e f g h i j X k H",
        "2": "C K L G M N O",
        "1028": "W Z",
        "1540": "P Q R S T U V",
      },
      C: {
        "1":
          "UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB",
        "164":
          "0 1 2 3 4 5 6 7 jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z vB wB",
        "1540":
          "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB",
      },
      D: {
        "1": "a b c d e f g h i j X k H xB yB zB",
        "292":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB",
        "1028": "W Z",
        "1540": "XB YB ZB aB bB cB dB eB fB gB P Q R S T U V",
      },
      E: {
        "1": "G 7B pB qB 8B",
        "292": "I l J D E F A B C 0B nB 1B 2B 3B 4B oB hB",
        "1028": "6B",
        "1540": "K L iB 5B",
      },
      F: {
        "1": "eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "292":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB",
        "1028": "cB dB",
        "1540": "NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB",
      },
      G: {
        "1": "XC pB qB",
        "292": "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC",
        "1028": "WC",
        "1540": "QC RC SC TC UC VC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "292": "jB I ZC aC bC cC sB dC eC" },
      J: { "292": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "292": "fC" },
      P: { "1": "pC qC", "292": "I gC hC iC jC kC", "1540": "oB lC mC nC oC" },
      Q: { "1540": "rC" },
      R: { "1540": "sC" },
      S: { "1540": "tC" },
    },
    B: 5,
    C: "CSS Logical Properties",
  };
});
var d = f(t()),
  p = f(t()),
  { A: I, B: L, C: P } = p,
  { default: E, ...F } = p,
  J = d.default ?? E ?? F;
export { I as A, J as default, L as B, P as C };
