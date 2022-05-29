/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-transitions) es2022 production */
var i = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of p(B)) {
      !l.call(C, t) && t !== o && A(C, t, {
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
) => (o = C != null ? i(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = n((H, s) => {
  s.exports = {
    A: {
      A: { "1": "A B", "2": "J D E F tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB vB wB",
        "33": "l J D E F A B C K L G",
        "164": "I",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33": "I l J D E F A B C K L G M N O m n o p q r s",
      },
      E: {
        "1": "D E F A B C K L G 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
        "33": "J 1B",
        "164": "I l 0B nB",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W iB",
        "2": "F 9B AC",
        "33": "C",
        "164": "B BC CC hB rB DC",
      },
      G: {
        "1": "E HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "GC",
        "164": "nB EC sB FC",
      },
      H: { "2": "YC" },
      I: { "1": "H dC eC", "33": "jB I ZC aC bC cC sB" },
      J: { "1": "A", "33": "D" },
      K: { "1": "Y iB", "33": "C", "164": "A B hB rB" },
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
    C: "CSS3 Transitions",
  };
});
var a = f(e()),
  d = f(e()),
  { A: I, B: c, C: J } = d,
  { default: E, ...F } = d,
  K = a.default ?? E ?? F;
export { c as B, I as A, J as C, K as default };
