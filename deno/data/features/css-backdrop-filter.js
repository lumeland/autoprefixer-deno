/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-backdrop-filter) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var F = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !S.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = m(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  e,
) => (e = C != null ? l(F(C)) : {},
  i(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = c((H, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L G M",
        "257": "N O",
      },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB vB wB",
        "578":
          "YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
      },
      D: {
        "1": "eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB",
        "194":
          "EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB",
      },
      E: {
        "2": "I l J D E 0B nB 1B 2B 3B",
        "33": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
      },
      F: {
        "1": "Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2":
          "0 F B C G M N O m n o p q r s t u v w x y z 9B AC BC CC hB rB DC iB",
        "194":
          "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB",
      },
      G: {
        "2": "E nB EC sB FC GC HC IC",
        "33": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "578": "X" },
      N: { "2": "A B" },
      O: { "2": "fC" },
      P: { "1": "mC nC oC pC qC", "2": "I", "194": "gC hC iC jC kC oB lC" },
      Q: { "194": "rC" },
      R: { "194": "sC" },
      S: { "2": "tC" },
    },
    B: 7,
    C: "CSS Backdrop Filter",
  };
});
var a = d(t()),
  p = d(t()),
  { A: I, B: J, C: K } = p,
  { default: D, ...E } = p,
  L = a.default ?? D ?? E;
export { I as A, J as B, K as C, L as default };
