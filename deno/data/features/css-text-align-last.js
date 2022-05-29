/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-text-align-last) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, t, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of p(B)) {
      !i.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(r = m(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var a = (
  C,
  B,
  t,
) => (t = C != null ? s(S(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = D((I, f) => {
  f.exports = {
    A: {
      A: { "132": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "4": "C K L G M N O",
      },
      C: {
        "1":
          "GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l J D E F A B vB wB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB",
      },
      D: {
        "1":
          "EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "0 1 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z",
        "322": "2 3 4 5 6 7 8 9 AB BB CB DB",
      },
      E: {
        "2":
          "I l J D E F A B C K L G 0B nB 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "1":
          "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C G M N O m n o 9B AC BC CC hB rB DC iB",
        "578": "0 p q r s t u v w x y z",
      },
      G: {
        "2":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "132": "A B" },
      O: { "1": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "2": "I" },
      Q: { "2": "rC" },
      R: { "1": "sC" },
      S: { "33": "tC" },
    },
    B: 5,
    C: "CSS3 text-align-last",
  };
});
var d = a(o()),
  l = a(o()),
  { A: c, B: n, C: J } = l,
  { default: F, ...G } = l,
  K = d.default ?? F ?? G;
export { c as A, J as C, K as default, n as B };
