/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-filters) es2022 production */
var l = Object.create;
var r = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var E = Object.getPrototypeOf, F = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, f) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of p(B)) {
      !F.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(f = m(B, t)) || f.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  e,
) => (e = C != null ? l(E(C)) : {},
  c(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var o = S((H, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "1028": "K L G M N O",
        "1346": "C",
      },
      C: {
        "1":
          "2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB vB",
        "196": "1",
        "516": "0 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z wB",
      },
      D: {
        "1":
          "KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N",
        "33":
          "0 1 2 3 4 5 6 7 8 9 O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB",
      },
      E: {
        "1": "A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l 0B nB 1B",
        "33": "J D E F 2B 3B",
      },
      F: {
        "1":
          "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33": "0 1 2 3 4 5 6 G M N O m n o p q r s t u v w x y z",
      },
      G: {
        "1": "KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB FC",
        "33": "E GC HC IC JC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB", "33": "dC eC" },
      J: { "2": "D", "33": "A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "iC jC kC oB lC mC nC oC pC qC", "33": "I gC hC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 5,
    C: "CSS Filter Effects",
  };
});
var s = A(o()),
  a = A(o()),
  { A: I, B: J, C: K } = a,
  { default: i, ...D } = a,
  L = s.default ?? i ?? D;
export { I as A, J as B, K as C, L as default };
