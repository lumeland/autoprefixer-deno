/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/text-size-adjust) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, t, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of S(B)) {
      !l.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(r = p(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  t,
) => (t = C != null ? m(i(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = D((I, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "1": "P Q R S T U V W Z a b c d e f g h i j X k H",
        "33": "C K L G M N O",
      },
      C: {
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H vB wB",
      },
      D: {
        "1":
          "LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
        "258": "t",
      },
      E: {
        "2":
          "I l J D E F A B C K L G 0B nB 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
        "258": "1B",
      },
      F: {
        "1":
          "AB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2":
          "0 1 2 3 4 5 6 7 8 9 F B C G M N O m n o p q r s t u v w x y z BB 9B AC BC CC hB rB DC iB",
      },
      G: {
        "2": "nB EC sB",
        "33":
          "E FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "33": "X" },
      N: { "161": "A B" },
      O: { "1": "fC" },
      P: { "1": "gC hC iC jC kC oB lC mC nC oC pC qC", "2": "I" },
      Q: { "2": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 7,
    C: "CSS text-size-adjust",
  };
});
var s = d(o()),
  a = d(o()),
  { A: c, B: u, C: J } = a,
  { default: F, ...G } = a,
  K = s.default ?? F ?? G;
export { c as A, J as C, K as default, u as B };
