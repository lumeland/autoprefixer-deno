/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/background-img-opts) es2022 production */
var p = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of i(B)) {
      !c.call(C, e) && e !== o && A(C, e, {
        get: () => B[e],
        enumerable: !(r = s(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var a = (
  C,
  B,
  o,
) => (o = C != null ? p(S(C)) : {},
  n(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var t = l((G, d) => {
  d.exports = {
    A: {
      A: { "1": "F A B", "2": "J D E tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB vB",
        "36": "wB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "516": "I l J D E F A B C K L",
      },
      E: {
        "1": "D E F A B C K L G 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
        "772": "I l J 0B nB 1B 2B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W BC CC hB rB DC iB",
        "2": "F 9B",
        "36": "AC",
      },
      G: {
        "1": "E HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "4": "nB EC sB GC",
        "516": "FC",
      },
      H: { "132": "YC" },
      I: { "1": "H dC eC", "36": "ZC", "516": "jB I cC sB", "548": "aC bC" },
      J: { "1": "D A" },
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
    B: 4,
    C: "CSS3 Background-image options",
  };
});
var f = a(t()),
  m = a(t()),
  { A: H, B: I, C: g } = m,
  { default: D, ...E } = m,
  u = f.default ?? D ?? E;
export { g as C, H as A, I as B, u as default };
