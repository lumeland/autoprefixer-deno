/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-text-orientation) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, t, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of s(B)) {
      !l.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(r = p(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  t,
) => (t = C != null ? m(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = n((H, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L G M N O",
      },
      C: {
        "1":
          "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 3 4 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z vB wB",
        "194": "5 6 7",
      },
      D: {
        "1":
          "FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB",
      },
      E: {
        "1": "L G 6B 7B pB qB 8B",
        "2": "I l J D E F 0B nB 1B 2B 3B 4B",
        "16": "A",
        "33": "B C K oB hB iB 5B",
      },
      F: {
        "1":
          "2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2":
          "0 1 F B C G M N O m n o p q r s t u v w x y z 9B AC BC CC hB rB DC iB",
      },
      G: {
        "1": "LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "E nB EC sB FC GC HC IC JC KC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "2": "I" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS text-orientation",
  };
});
var d = f(o()),
  i = f(o()),
  { A: I, B: c, C: J } = i,
  { default: E, ...F } = i,
  K = d.default ?? E ?? F;
export { c as B, I as A, J as C, K as default };
