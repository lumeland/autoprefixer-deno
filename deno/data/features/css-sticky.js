/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-sticky) es2022 production */
var p = Object.create;
var A = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of m(B)) {
      !c.call(C, t) && t !== o && A(C, t, {
        get: () => B[t],
        enumerable: !(r = a(B, t)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  o,
) => (o = C != null ? p(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = l((H, s) => {
  s.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "c d e f g h i j X k H",
        "2": "C K L G",
        "1028": "P Q R S T U V W Z a b",
        "4100": "M N O",
      },
      C: {
        "1":
          "kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l J D E F A B C K L G M N O m n o p q r s vB wB",
        "194": "t u v w x y",
        "516":
          "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
      },
      D: {
        "1": "c d e f g h i j X k H xB yB zB",
        "2":
          "4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p AB BB CB DB EB FB GB HB IB",
        "322": "0 1 2 3 q r s t u v w x y z JB KB LB MB",
        "1028":
          "NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b",
      },
      E: {
        "1": "K L G 5B 6B 7B pB qB 8B",
        "2": "I l J 0B nB 1B",
        "33": "E F A B C 3B 4B oB hB iB",
        "2084": "D 2B",
      },
      F: {
        "1": "gB P Q R mB S T U V W",
        "2":
          "0 1 2 3 4 5 F B C G M N O m n o p q r s t u v w x y z 9B AC BC CC hB rB DC iB",
        "322": "6 7 8",
        "1028":
          "9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB",
      },
      G: {
        "1": "RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB FC",
        "33": "E IC JC KC LC MC NC OC PC QC",
        "2084": "GC HC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1028": "fC" },
      P: { "1": "hC iC jC kC oB lC mC nC oC pC qC", "2": "I gC" },
      Q: { "1028": "rC" },
      R: { "2": "sC" },
      S: { "516": "tC" },
    },
    B: 5,
    C: "CSS position:sticky",
  };
});
var d = f(e()),
  i = f(e()),
  { A: I, B: n, C: J } = i,
  { default: E, ...F } = i,
  K = d.default ?? E ?? F;
export { I as A, J as C, K as default, n as B };
