/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-image-set) es2022 production */
var s = Object.create;
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
) => (e = C != null ? s(i(C)) : {},
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
        "2": "C K L G M N O",
        "164": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U vB wB",
        "66": "V W",
        "257": "a b c d e f g h i j X k H",
        "772": "Z",
      },
      D: {
        "2": "I l J D E F A B C K L G M N O m n",
        "164":
          "0 1 2 3 4 5 6 7 8 9 o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "2": "I l 0B nB 1B",
        "132": "A B C K oB hB iB 5B",
        "164": "J D E F 2B 3B 4B",
        "516": "L G 6B 7B pB qB 8B",
      },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "164":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "2": "nB EC sB FC",
        "132": "LC MC NC OC PC QC RC SC TC UC",
        "164": "E GC HC IC JC KC",
        "516": "VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "2": "jB I ZC aC bC cC sB", "164": "H dC eC" },
      J: { "2": "D", "164": "A" },
      K: { "2": "A B C hB rB iB", "164": "Y" },
      L: { "164": "H" },
      M: { "257": "X" },
      N: { "2": "A B" },
      O: { "164": "fC" },
      P: { "164": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "164": "rC" },
      R: { "164": "sC" },
      S: { "2": "tC" },
    },
    B: 5,
    C: "CSS image-set",
  };
});
var d = f(o()),
  m = f(o()),
  { A: c, B: J, C: K } = m,
  { default: F, ...G } = m,
  L = d.default ?? F ?? G;
export { c as A, J as B, K as C, L as default };
