/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/object-fit) es2022 production */
var s = Object.create;
var r = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, o, f) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of c(B)) {
      !S.call(C, t) && t !== o && r(C, t, {
        get: () => B[t],
        enumerable: !(f = a(B, t)) || f.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  o,
) => (o = C != null ? s(m(C)) : {},
  D(
    B || !C || !C.__esModule
      ? r(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = l((H, d) => {
  d.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "2": "C K L G",
        "260": "M N O",
      },
      C: {
        "1":
          "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z vB wB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N O m n o p q r s t u v w x y",
      },
      E: {
        "1": "A B C K L G oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l J D 0B nB 1B 2B",
        "132": "E F 3B 4B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F G M N O 9B AC BC",
        "33": "B C CC hB rB DC iB",
      },
      G: {
        "1": "LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB FC GC HC",
        "132": "E IC JC KC",
      },
      H: { "33": "YC" },
      I: { "1": "H eC", "2": "jB I ZC aC bC cC sB dC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A", "33": "B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS3 object-fit/object-position",
  };
});
var i = A(e()),
  p = A(e()),
  { A: I, B: b, C: n } = p,
  { default: E, ...F } = p,
  J = i.default ?? E ?? F;
export { b as B, I as A, J as default, n as C };
