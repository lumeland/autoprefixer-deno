/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/transforms2d) es2022 production */
var m = Object.create;
var f = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var D = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var E = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var F = (C, B, o, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of D(B)) {
      !l.call(C, e) && e !== o && f(C, e, {
        get: () => B[e],
        enumerable: !(t = p(B, e)) || t.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  o,
) => (o = C != null ? m(S(C)) : {},
  F(
    B || !C || !C.__esModule
      ? f(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var r = E((c, s) => {
  s.exports = {
    A: {
      A: { "2": "tB", "8": "J D E", "129": "A B", "161": "F" },
      B: {
        "1": "N O P Q R S T U V W Z a b c d e f g h i j X k H",
        "129": "C K L G M",
      },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB",
        "33": "I l J D E F A B C K L G vB wB",
      },
      D: {
        "1":
          "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33": "0 1 2 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "33": "I l J D E 0B nB 1B 2B 3B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W iB",
        "2": "F 9B AC",
        "33": "B C G M N O m n o p BC CC hB rB DC",
      },
      G: {
        "1": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "E nB EC sB FC GC HC IC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "33": "jB I ZC aC bC cC sB dC eC" },
      J: { "33": "D A" },
      K: { "1": "B C Y hB rB iB", "2": "A" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS3 2D Transforms",
  };
});
var a = A(r()),
  d = A(r()),
  { A: i, B: n, C: J } = d,
  { default: G, ...H } = d,
  K = a.default ?? G ?? H;
export { i as A, J as C, K as default, n as B };
