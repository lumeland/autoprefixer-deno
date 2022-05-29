/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-cross-fade) es2022 production */
var F = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var l = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of p(B)) {
      !c.call(C, e) && e !== o && A(C, e, {
        get: () => B[e],
        enumerable: !(r = m(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  o,
) => (o = C != null ? F(S(C)) : {},
  l(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var t = i((G, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "2": "C K L G M N O",
        "33": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H vB wB",
      },
      D: {
        "2": "I l J D E F A B C K L G M",
        "33":
          "0 1 2 3 4 5 6 7 8 9 N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "1": "A B C K L G oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l 0B nB",
        "33": "J D E F 1B 2B 3B 4B",
      },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "1": "LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB",
        "33": "E FC GC HC IC JC KC",
      },
      H: { "2": "YC" },
      I: { "2": "jB I ZC aC bC cC sB", "33": "H dC eC" },
      J: { "2": "D A" },
      K: { "2": "A B C hB rB iB", "33": "Y" },
      L: { "33": "H" },
      M: { "2": "X" },
      N: { "2": "A B" },
      O: { "33": "fC" },
      P: { "33": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "33": "rC" },
      R: { "33": "sC" },
      S: { "2": "tC" },
    },
    B: 4,
    C: "CSS Cross-Fade Function",
  };
});
var s = d(t()),
  a = d(t()),
  { A: H, B: I, C: u } = a,
  { default: n, ...D } = a,
  J = s.default ?? n ?? D;
export { H as A, I as B, J as default, u as C };
