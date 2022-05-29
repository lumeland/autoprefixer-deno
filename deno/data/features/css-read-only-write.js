/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-read-only-write) es2022 production */
var l = Object.create;
var d = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of p(B)) {
      !c.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = m(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var a = (
  C,
  B,
  e,
) => (e = C != null ? l(S(C)) : {},
  n(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var r = i((G, A) => {
  A.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C",
      },
      C: {
        "1": "gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "16": "uB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB vB wB",
      },
      D: {
        "1":
          "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "16": "I l J D E F A B C K L",
        "132": "0 1 2 G M N O m n o p q r s t u v w x y z",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "16": "0B nB",
        "132": "I l J D E 1B 2B 3B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "16": "F B 9B AC BC CC hB",
        "132": "C G M N O m n o p rB DC iB",
      },
      G: {
        "1": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "16": "nB EC",
        "132": "E sB FC GC HC IC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "16": "ZC aC", "132": "jB I bC cC sB dC eC" },
      J: { "1": "A", "132": "D" },
      K: { "1": "Y", "2": "A B hB", "132": "C rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "33": "tC" },
    },
    B: 1,
    C: "CSS :read-only and :read-write selectors",
  };
});
var f = a(r()),
  s = a(r()),
  { A: H, B: I, C: J } = s,
  { default: D, ...E } = s,
  K = f.default ?? D ?? E;
export { H as A, I as B, J as C, K as default };
