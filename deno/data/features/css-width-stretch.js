/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-width-stretch) es2022 production */
var m = Object.create;
var d = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var E = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var F = (C, B, t, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of c(B)) {
      !l.call(C, e) && e !== t && d(C, e, {
        get: () => B[e],
        enumerable: !(r = s(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  t,
) => (t = C != null ? m(i(C)) : {},
  F(
    B || !C || !C.__esModule
      ? d(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = E((D, f) => {
  f.exports = {
    A: {
      D: {
        "2": "I l J D E F A B C K L G M N O m n o",
        "33":
          "0 1 2 3 4 5 6 7 8 9 p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      L: { "33": "H" },
      B: {
        "2": "C K L G M N O",
        "33": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "2": "uB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H vB wB",
      },
      M: { "33": "X" },
      A: { "2": "J D E F A B tB" },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      K: { "2": "A B C hB rB iB", "33": "Y" },
      E: {
        "2": "I l J 0B nB 1B 2B 8B",
        "33": "D E F A B C K L G 3B 4B oB hB iB 5B 6B 7B pB qB",
      },
      G: {
        "2": "nB EC sB FC GC",
        "33": "E HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      P: { "2": "I", "33": "gC hC iC jC kC oB lC mC nC oC pC qC" },
      I: { "2": "jB I ZC aC bC cC sB", "33": "H dC eC" },
    },
    B: 6,
    C: "width: stretch property",
  };
});
var A = p(o()),
  a = p(o()),
  { A: H, B: K, C: L } = a,
  { default: G, ...I } = a,
  M = A.default ?? G ?? I;
export { H as A, K as B, L as C, M as default };
