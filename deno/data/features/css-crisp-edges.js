/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-crisp-edges) es2022 production */
var p = Object.create;
var d = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty;
var E = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var F = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of m(B)) {
      !D.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(r = i(B, t)) || r.enumerable,
      });
    }
  }
  return C;
};
var s = (
  C,
  B,
  e,
) => (e = C != null ? p(l(C)) : {},
  F(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var o = E((c, A) => {
  A.exports = {
    A: {
      A: { "2": "J tB", "2340": "D E F A B" },
      B: {
        "2": "C K L G M N O",
        "1025": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "1": "e f g h i j X k H",
        "2": "uB jB vB",
        "513":
          "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d",
        "545":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y wB",
      },
      D: {
        "2":
          "0 1 2 3 4 5 6 7 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z",
        "1025":
          "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "1": "A B C K L G oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l 0B nB 1B",
        "164": "J",
        "4644": "D E F 2B 3B 4B",
      },
      F: {
        "2": "F B G M N O m n o p q r s t u 9B AC BC CC hB rB",
        "545": "C DC iB",
        "1025":
          "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "1": "LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB",
        "4260": "FC GC",
        "4644": "E HC IC JC KC",
      },
      H: { "2": "YC" },
      I: { "2": "jB I ZC aC bC cC sB dC eC", "1025": "H" },
      J: { "2": "D", "4260": "A" },
      K: { "2": "A B hB rB", "545": "C iB", "1025": "Y" },
      L: { "1025": "H" },
      M: { "545": "X" },
      N: { "2340": "A B" },
      O: { "1": "fC" },
      P: { "1025": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1025": "rC" },
      R: { "1025": "sC" },
      S: { "4097": "tC" },
    },
    B: 7,
    C: "Crisp edges/pixelated images",
  };
});
var a = s(o()),
  f = s(o()),
  { A: g, B: J, C: K } = f,
  { default: G, ...H } = f,
  L = a.default ?? G ?? H;
export { g as A, J as B, K as C, L as default };
