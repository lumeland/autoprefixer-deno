/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-regions) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of S(B)) {
      !l.call(C, o) && o !== e && A(C, o, {
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
) => (e = C != null ? m(i(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = D((I, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F tB", "420": "A B" },
      B: {
        "2": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "420": "C K L G M N O",
      },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H vB wB",
      },
      D: {
        "2":
          "2 3 4 5 6 7 8 9 I l J D E F A B C K L AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "36": "G M N O",
        "66": "0 1 m n o p q r s t u v w x y z",
      },
      E: {
        "2": "I l J C K L G 0B nB 1B hB iB 5B 6B 7B pB qB 8B",
        "33": "D E F A B 2B 3B 4B oB",
      },
      F: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 F B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W 9B AC BC CC hB rB DC iB",
      },
      G: {
        "2": "nB EC sB FC GC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "E HC IC JC KC LC MC NC",
      },
      H: { "2": "YC" },
      I: { "2": "jB I H ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "2": "A B C Y hB rB iB" },
      L: { "2": "H" },
      M: { "2": "X" },
      N: { "420": "A B" },
      O: { "2": "fC" },
      P: { "2": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "2": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 5,
    C: "CSS Regions",
  };
});
var s = f(t()),
  a = f(t()),
  { A: R, B: c, C: n } = a,
  { default: F, ...G } = a,
  J = s.default ?? F ?? G;
export { c as B, J as default, n as C, R as A };
