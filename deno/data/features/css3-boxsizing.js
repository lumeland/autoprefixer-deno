/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css3-boxsizing) es2022 production */
var i = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of p(B)) {
      !l.call(C, e) && e !== o && A(C, e, {
        get: () => B[e],
        enumerable: !(r = m(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  o,
) => (o = C != null ? i(S(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var t = D((I, d) => {
  d.exports = {
    A: {
      A: { "1": "E F A B", "8": "J D tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "33": "uB jB I l J D E F A B C K L G M N O m n o p q r s t u v vB wB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33": "I l J D E F",
      },
      E: {
        "1": "J D E F A B C K L G 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
        "33": "I l 0B nB",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W 9B AC BC CC hB rB DC iB",
        "2": "F",
      },
      G: {
        "1": "E FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "nB EC sB",
      },
      H: { "1": "YC" },
      I: { "1": "I H cC sB dC eC", "33": "jB ZC aC bC" },
      J: { "1": "A", "33": "D" },
      K: { "1": "A B C Y hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 5,
    C: "CSS3 Box-sizing",
  };
});
var s = f(t()),
  a = f(t()),
  { A: c, B: n, C: J } = a,
  { default: F, ...G } = a,
  K = s.default ?? F ?? G;
export { c as A, J as C, K as default, n as B };
