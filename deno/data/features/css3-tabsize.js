/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css3-tabsize) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of S(B)) {
      !l.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(r = p(B, t)) || r.enumerable,
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
var o = D((I, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L G M N O",
      },
      C: {
        "1": "c d e f g h i j X k H",
        "2": "uB jB vB wB",
        "33":
          "KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b",
        "164":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB",
      },
      D: {
        "1":
          "9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N O m n",
        "132": "0 1 2 3 4 5 6 7 8 o p q r s t u v w x y z",
      },
      E: {
        "1": "L G 5B 6B 7B pB qB 8B",
        "2": "I l J 0B nB 1B",
        "132": "D E F A B C K 2B 3B 4B oB hB iB",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F 9B AC BC",
        "132": "G M N O m n o p q r s t u v",
        "164": "B C CC hB rB DC iB",
      },
      G: {
        "1": "UC VC WC XC pB qB",
        "2": "nB EC sB FC GC",
        "132": "E HC IC JC KC LC MC NC OC PC QC RC SC TC",
      },
      H: { "164": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB", "132": "dC eC" },
      J: { "132": "D A" },
      K: { "1": "Y", "2": "A", "164": "B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "164": "tC" },
    },
    B: 5,
    C: "CSS3 tab-size",
  };
});
var d = f(o()),
  s = f(o()),
  { A: c, B: J, C: K } = s,
  { default: F, ...G } = s,
  L = d.default ?? F ?? G;
export { c as A, J as B, K as C, L as default };
