/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/text-overflow) es2022 production */
var m = Object.create;
var f = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty;
var E = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var F = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !D.call(C, o) && o !== e && f(C, o, {
        get: () => B[o],
        enumerable: !(r = p(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  e,
) => (e = C != null ? m(S(C)) : {},
  F(
    B || !C || !C.__esModule
      ? f(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = E((c, d) => {
  d.exports = {
    A: {
      A: { "1": "J D E F A B", "2": "tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "8": "uB jB I l J vB wB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "1":
          "I l J D E F A B C K L G 0B nB 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W hB rB DC iB",
        "33": "F 9B AC BC CC",
      },
      G: {
        "1":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "1": "YC" },
      I: { "1": "jB I H ZC aC bC cC sB dC eC" },
      J: { "1": "D A" },
      K: { "1": "Y iB", "33": "A B C hB rB" },
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
    C: "CSS3 Text-overflow",
  };
});
var a = A(t()),
  l = A(t()),
  { A: i, B: J, C: K } = l,
  { default: G, ...H } = l,
  L = a.default ?? G ?? H;
export { i as A, J as B, K as C, L as default };
