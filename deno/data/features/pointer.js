/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/pointer) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var D = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var E = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !n.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(r = p(B, t)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  e,
) => (e = C != null ? m(l(C)) : {},
  E(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var o = D((I, d) => {
  d.exports = {
    A: {
      A: { "1": "B", "2": "J D E F tB", "164": "A" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l vB wB",
        "8":
          "0 1 2 3 4 5 6 7 J D E F A B C K L G M N O m n o p q r s t u v w x y z",
        "328": "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB",
      },
      D: {
        "1":
          "MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N O m n o",
        "8":
          "0 1 2 3 4 5 6 7 8 9 p q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
        "584": "JB KB LB",
      },
      E: {
        "1": "K L G 5B 6B 7B pB qB 8B",
        "2": "I l J 0B nB 1B",
        "8": "D E F A B C 2B 3B 4B oB hB",
        "1096": "iB",
      },
      F: {
        "1":
          "9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "8": "0 1 2 3 4 5 G M N O m n o p q r s t u v w x y z",
        "584": "6 7 8",
      },
      G: {
        "1": "SC TC UC VC WC XC pB qB",
        "8": "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC",
        "6148": "RC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "8": "jB I ZC aC bC cC sB dC eC" },
      J: { "8": "D A" },
      K: { "1": "Y", "2": "A", "8": "B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "B", "36": "A" },
      O: { "8": "fC" },
      P: { "1": "hC iC jC kC oB lC mC nC oC pC qC", "2": "gC", "8": "I" },
      Q: { "1": "rC" },
      R: { "2": "sC" },
      S: { "328": "tC" },
    },
    B: 2,
    C: "Pointer events",
  };
});
var s = f(o()),
  a = f(o()),
  { A: P, B: c, C: J } = a,
  { default: F, ...G } = a,
  K = s.default ?? F ?? G;
export { c as B, J as C, K as default, P as A };
