/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/border-image) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of S(B)) {
      !l.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(t = p(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  e,
) => (e = C != null ? s(i(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var r = D((I, f) => {
  f.exports = {
    A: {
      A: { "1": "B", "2": "J D E F A tB" },
      B: {
        "1": "L G M N O P Q R S T U V W Z a b c d e f g h i j X k H",
        "129": "C K",
      },
      C: {
        "1":
          "HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB",
        "260":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB",
        "804": "I l J D E F A B C K L vB wB",
      },
      D: {
        "1":
          "NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "260": "IB JB KB LB MB",
        "388": "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB",
        "1412": "G M N O m n o p q r s t u v w",
        "1956": "I l J D E F A B C K L",
      },
      E: {
        "1": "qB 8B",
        "129": "A B C K L G 4B oB hB iB 5B 6B 7B pB",
        "1412": "J D E F 2B 3B",
        "1956": "I l 0B nB 1B",
      },
      F: {
        "1":
          "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F 9B AC",
        "260": "5 6 7 8 9",
        "388": "0 1 2 3 4 G M N O m n o p q r s t u v w x y z",
        "1796": "BC CC",
        "1828": "B C hB rB DC iB",
      },
      G: {
        "1": "qB",
        "129": "KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB",
        "1412": "E GC HC IC JC",
        "1956": "nB EC sB FC",
      },
      H: { "1828": "YC" },
      I: { "1": "H", "388": "dC eC", "1956": "jB I ZC aC bC cC sB" },
      J: { "1412": "A", "1924": "D" },
      K: { "1": "Y", "2": "A", "1828": "B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "B", "2": "A" },
      O: { "388": "fC" },
      P: { "1": "iC jC kC oB lC mC nC oC pC qC", "260": "gC hC", "388": "I" },
      Q: { "260": "rC" },
      R: { "260": "sC" },
      S: { "260": "tC" },
    },
    B: 4,
    C: "CSS3 Border images",
  };
});
var a = d(r()),
  m = d(r()),
  { A: c, B: J, C: K } = m,
  { default: F, ...G } = m,
  L = a.default ?? F ?? G;
export { c as A, J as B, K as C, L as default };
