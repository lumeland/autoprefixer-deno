/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-color-adjust) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of p(B)) {
      !c.call(C, t) && t !== o && A(C, t, {
        get: () => B[t],
        enumerable: !(r = m(B, t)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  o,
) => (o = C != null ? l(S(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = D((I, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "2": "C K L G M N O",
        "33": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "1":
          "FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB vB wB",
      },
      D: {
        "16": "I l J D E F A B C K L G M N O",
        "33":
          "0 1 2 3 4 5 6 7 8 9 m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "2": "I l 0B nB 1B",
        "33": "J D E F A B C K L G 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "16":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "16": "jB I ZC aC bC cC sB dC eC", "33": "H" },
      J: { "16": "D A" },
      K: { "2": "A B C hB rB iB", "33": "Y" },
      L: { "16": "H" },
      M: { "1": "X" },
      N: { "16": "A B" },
      O: { "16": "fC" },
      P: { "16": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "33": "rC" },
      R: { "16": "sC" },
      S: { "1": "tC" },
    },
    B: 5,
    C: "CSS color-adjust",
  };
});
var a = d(e()),
  s = d(e()),
  { A: i, B: u, C: J } = s,
  { default: F, ...G } = s,
  K = a.default ?? F ?? G;
export { i as A, J as C, K as default, u as B };
