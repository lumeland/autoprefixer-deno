/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-filter-function) es2022 production */
var l = Object.create;
var r = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, t, f) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of p(B)) {
      !S.call(C, e) && e !== t && r(C, e, {
        get: () => B[e],
        enumerable: !(f = m(B, e)) || f.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  t,
) => (t = C != null ? l(s(C)) : {},
  n(
    B || !C || !C.__esModule
      ? r(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = c((G, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: { "2": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H vB wB",
      },
      D: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "1": "A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l J D E 0B nB 1B 2B 3B",
        "33": "F",
      },
      F: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 F B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W 9B AC BC CC hB rB DC iB",
      },
      G: {
        "1": "LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "E nB EC sB FC GC HC IC",
        "33": "JC KC",
      },
      H: { "2": "YC" },
      I: { "2": "jB I H ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "2": "A B C Y hB rB iB" },
      L: { "2": "H" },
      M: { "2": "X" },
      N: { "2": "A B" },
      O: { "2": "fC" },
      P: { "2": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "2": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 5,
    C: "CSS filter() function",
  };
});
var a = A(o()),
  i = A(o()),
  { A: H, B: I, C: u } = i,
  { default: D, ...E } = i,
  J = a.default ?? D ?? E;
export { H as A, I as B, J as default, u as C };
