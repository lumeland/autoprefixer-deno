/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-clip-path) es2022 production */
var l = Object.create;
var p = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var H = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== o && p(C, t, {
        get: () => B[t],
        enumerable: !(r = m(B, t)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  o,
) => (o = C != null ? l(H(C)) : {},
  i(
    B || !C || !C.__esModule
      ? p(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = c((G, A) => {
  A.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "2": "C K L G M N",
        "260": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "3138": "O",
      },
      C: {
        "1":
          "LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB",
        "132":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB vB wB",
        "644": "EB FB GB HB IB JB KB",
      },
      D: {
        "2": "I l J D E F A B C K L G M N O m n o p q",
        "260":
          "MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "292":
          "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB",
      },
      E: {
        "2": "I l J 0B nB 1B 2B",
        "260": "L G 5B 6B 7B pB qB 8B",
        "292": "D E F A B C K 3B 4B oB hB iB",
      },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "260":
          "9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "292": "0 1 2 3 4 5 6 7 8 G M N O m n o p q r s t u v w x y z",
      },
      G: {
        "2": "nB EC sB FC GC",
        "260": "RC SC TC UC VC WC XC pB qB",
        "292": "E HC IC JC KC LC MC NC OC PC QC",
      },
      H: { "2": "YC" },
      I: { "2": "jB I ZC aC bC cC sB", "260": "H", "292": "dC eC" },
      J: { "2": "D A" },
      K: { "2": "A B C hB rB iB", "260": "Y" },
      L: { "260": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "292": "fC" },
      P: { "292": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "292": "rC" },
      R: { "260": "sC" },
      S: { "644": "tC" },
    },
    B: 4,
    C: "CSS clip-path property (for HTML)",
  };
});
var a = f(e()),
  d = f(e()),
  { A: I, B: L, C: M } = d,
  { default: D, ...E } = d,
  J = a.default ?? D ?? E;
export { I as A, J as default, L as B, M as C };
