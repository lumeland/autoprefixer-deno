/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-deviceadaptation) es2022 production */
var i = Object.create;
var r = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var D = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var l = (C, B, e, A) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(A = m(B, t)) || A.enumerable,
      });
    }
  }
  return C;
};
var a = (
  C,
  B,
  e,
) => (e = C != null ? i(D(C)) : {},
  l(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var o = c((H, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F tB", "164": "A B" },
      B: {
        "66": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "164": "C K L G M N O",
      },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H vB wB",
      },
      D: {
        "2": "I l J D E F A B C K L G M N O m n o p q r s t u v",
        "66":
          "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "2":
          "I l J D E F A B C K L G 0B nB 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "2":
          "0 1 2 3 4 5 6 F B C G M N O m n o p q r s t u v w x y z 9B AC BC CC hB rB DC iB",
        "66":
          "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "2":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "292": "YC" },
      I: { "2": "jB I H ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "2": "A Y", "292": "B C hB rB iB" },
      L: { "2": "H" },
      M: { "2": "X" },
      N: { "164": "A B" },
      O: { "2": "fC" },
      P: { "2": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "66": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 5,
    C: "CSS Device Adaptation",
  };
});
var f = a(o()),
  p = a(o()),
  { A: I, B: n, C: J } = p,
  { default: E, ...F } = p,
  K = f.default ?? E ?? F;
export { I as A, J as C, K as default, n as B };
