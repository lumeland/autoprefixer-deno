/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-overscroll-behavior) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, o, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of p(B)) {
      !c.call(C, e) && e !== o && A(C, e, {
        get: () => B[e],
        enumerable: !(t = m(B, e)) || t.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  o,
) => (o = C != null ? s(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var r = i((H, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E F tB", "132": "A B" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "132": "C K L G M N",
        "516": "O",
      },
      C: {
        "1":
          "kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB vB wB",
      },
      D: {
        "1":
          "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB",
        "260": "SB Y",
      },
      E: {
        "1": "8B",
        "2": "I l J D E F A B C K L 0B nB 1B 2B 3B 4B oB hB iB 5B",
        "1090": "G 6B 7B pB qB",
      },
      F: {
        "1":
          "JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2":
          "0 1 2 3 4 5 6 7 8 9 F B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB 9B AC BC CC hB rB DC iB",
        "260": "HB IB",
      },
      G: {
        "2": "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC",
        "1090": "WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "132": "A B" },
      O: { "2": "fC" },
      P: { "1": "jC kC oB lC mC nC oC pC qC", "2": "I gC hC iC" },
      Q: { "1": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 7,
    C: "CSS overscroll-behavior",
  };
});
var d = f(r()),
  l = f(r()),
  { A: I, B: J, C: K } = l,
  { default: E, ...F } = l,
  L = d.default ?? E ?? F;
export { I as A, J as B, K as C, L as default };
