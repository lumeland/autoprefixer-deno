/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/font-feature) es2022 production */
var m = Object.create;
var r = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, t, f) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of S(B)) {
      !l.call(C, e) && e !== t && r(C, e, {
        get: () => B[e],
        enumerable: !(f = p(B, e)) || f.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  t,
) => (t = C != null ? m(i(C)) : {},
  D(
    B || !C || !C.__esModule
      ? r(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = n((H, s) => {
  s.exports = {
    A: {
      A: { "1": "A B", "2": "J D E F tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB vB wB",
        "33": "0 G M N O m n o p q r s t u v w x y z",
        "164": "I l J D E F A B C K L",
      },
      D: {
        "1":
          "FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G",
        "33": "0 1 2 3 4 5 6 7 8 9 o p q r s t u v w x y z AB BB CB DB EB",
        "292": "M N O m n",
      },
      E: {
        "1": "A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "D E F 0B nB 2B 3B",
        "4": "I l J 1B",
      },
      F: {
        "1":
          "2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33": "0 1 G M N O m n o p q r s t u v w x y z",
      },
      G: {
        "1": "KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "E HC IC JC",
        "4": "nB EC sB FC GC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB", "33": "dC eC" },
      J: { "2": "D", "33": "A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "33": "I" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS font-feature-settings",
  };
});
var a = A(o()),
  d = A(o()),
  { A: I, B: c, C: u } = d,
  { default: E, ...F } = d,
  J = a.default ?? E ?? F;
export { c as B, I as A, J as default, u as C };
