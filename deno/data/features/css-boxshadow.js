/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-boxshadow) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty;
var E = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var F = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of S(B)) {
      !D.call(C, e) && e !== o && A(C, e, {
        get: () => B[e],
        enumerable: !(r = p(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  o,
) => (o = C != null ? m(l(C)) : {},
  F(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var t = E((c, f) => {
  f.exports = {
    A: {
      A: { "1": "F A B", "2": "J D E tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB",
        "33": "vB wB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33": "I l J D E F",
      },
      E: {
        "1": "J D E F A B C K L G 1B 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
        "33": "l",
        "164": "I 0B nB",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W BC CC hB rB DC iB",
        "2": "F 9B AC",
      },
      G: {
        "1": "E FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "EC sB",
        "164": "nB",
      },
      H: { "2": "YC" },
      I: { "1": "I H cC sB dC eC", "164": "jB ZC aC bC" },
      J: { "1": "A", "33": "D" },
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
    C: "CSS3 Box-shadow",
  };
});
var a = d(t()),
  s = d(t()),
  { A: i, B: J, C: K } = s,
  { default: G, ...H } = s,
  L = a.default ?? G ?? H;
export { i as A, J as B, K as C, L as default };
