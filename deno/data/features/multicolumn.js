/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/multicolumn) es2022 production */
var m = Object.create;
var r = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, o, l) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !S.call(C, t) && t !== o && r(C, t, {
        get: () => B[t],
        enumerable: !(l = p(B, t)) || l.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  o,
) => (o = C != null ? m(u(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = c((G, f) => {
  f.exports = {
    A: {
      A: { "1": "A B", "2": "J D E F tB" },
      B: {
        "1": "C K L G M N O",
        "516": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "132": "JB KB LB MB NB OB PB kB QB lB RB SB Y",
        "164":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB vB wB",
        "516":
          "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c",
        "1028": "d e f g h i j X k H",
      },
      D: {
        "420":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB",
        "516":
          "HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "1": "A B C K L G oB hB iB 5B 6B 7B pB qB 8B",
        "132": "F 4B",
        "164": "D E 3B",
        "420": "I l J 0B nB 1B 2B",
      },
      F: {
        "1": "C hB rB DC iB",
        "2": "F B 9B AC BC CC",
        "420": "0 1 2 3 G M N O m n o p q r s t u v w x y z",
        "516":
          "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "1": "LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "132": "JC KC",
        "164": "E HC IC",
        "420": "nB EC sB FC GC",
      },
      H: { "1": "YC" },
      I: { "420": "jB I ZC aC bC cC sB dC eC", "516": "H" },
      J: { "420": "D A" },
      K: { "1": "C hB rB iB", "2": "A B", "516": "Y" },
      L: { "516": "H" },
      M: { "516": "X" },
      N: { "1": "A B" },
      O: { "1": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "420": "I" },
      Q: { "132": "rC" },
      R: { "132": "sC" },
      S: { "164": "tC" },
    },
    B: 4,
    C: "CSS3 Multiple column layout",
  };
});
var a = A(e()),
  d = A(e()),
  { A: H, B: I, C: M } = d,
  { default: D, ...E } = d,
  n = a.default ?? D ?? E;
export { H as A, I as B, M as C, n as default };
