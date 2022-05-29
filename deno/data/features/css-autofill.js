/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-autofill) es2022 production */
var p = Object.create;
var d = Object.defineProperty;
var A = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, o, a) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of m(B)) {
      !i.call(C, e) && e !== o && d(C, e, {
        get: () => B[e],
        enumerable: !(a = A(B, e)) || a.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  o,
) => (o = C != null ? p(c(C)) : {},
  E(
    B || !C || !C.__esModule
      ? d(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var t = u((S, l) => {
  l.exports = {
    A: {
      D: {
        "1": "h i j X k H xB yB zB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g",
      },
      L: { "1": "H" },
      B: {
        "1": "h i j X k H",
        "2": "C K L G M N O",
        "33": "P Q R S T U V W Z a b c d e f g",
      },
      C: {
        "1": "V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U vB wB",
      },
      M: { "1": "X" },
      A: { "2": "J D E F A B tB" },
      F: {
        "1": "mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R",
      },
      K: { "2": "A B C hB rB iB", "33": "Y" },
      E: {
        "1": "G 7B pB qB",
        "2": "8B",
        "33": "I l J D E F A B C K L 0B nB 1B 2B 3B 4B oB hB iB 5B 6B",
      },
      G: {
        "1": "XC pB qB",
        "33":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC",
      },
      P: { "33": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      I: { "1": "H", "33": "jB I ZC aC bC cC sB dC eC" },
    },
    B: 6,
    C: ":autofill CSS pseudo-class",
  };
});
var r = f(t()),
  s = f(t()),
  { A: D, B: H, C: K } = s,
  { default: F, ...G } = s,
  L = r.default ?? F ?? G;
export { D as A, H as B, K as C, L as default };
