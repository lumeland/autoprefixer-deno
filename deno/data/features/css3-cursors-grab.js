/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css3-cursors-grab) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var g = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, r, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of S(B)) {
      !c.call(C, o) && o !== r && A(C, o, {
        get: () => B[o],
        enumerable: !(t = p(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var a = (
  C,
  B,
  r,
) => (r = C != null ? m(b(C)) : {},
  i(
    B || !C || !C.__esModule
      ? A(r, "default", { value: C, enumerable: !0 })
      : r,
    C,
  ));
var e = g((F, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "G M N O P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L",
      },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "33": "uB jB I l J D E F A B C K L G M N O m n o p q r s t vB wB",
      },
      D: {
        "1":
          "WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB",
      },
      E: {
        "1": "B C K L G hB iB 5B 6B 7B pB qB 8B",
        "33": "I l J D E F A 0B nB 1B 2B 3B 4B oB",
      },
      F: {
        "1":
          "C MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W DC iB",
        "2": "F B 9B AC BC CC hB rB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB",
      },
      G: {
        "2":
          "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "33": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "2": "X" },
      N: { "2": "A B" },
      O: { "2": "fC" },
      P: { "2": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "33": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 3,
    C: "CSS grab & grabbing cursors",
  };
});
var s = a(e()),
  d = a(e()),
  { A: G, B: H, C: I } = d,
  { default: l, ...D } = d,
  n = s.default ?? l ?? D;
export { G as A, H as B, I as C, n as default };
