/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-file-selector-button) es2022 production */
var s = Object.create;
var d = Object.defineProperty;
var A = Object.getOwnPropertyDescriptor;
var a = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of a(B)) {
      !i.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(r = A(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var f = (
  C,
  B,
  e,
) => (e = C != null ? s(c(C)) : {},
  u(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = n((I, l) => {
  l.exports = {
    A: {
      D: {
        "1": "a b c d e f g h i j X k H xB yB zB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z",
      },
      L: { "1": "H" },
      B: {
        "1": "a b c d e f g h i j X k H",
        "33": "C K L G M N O P Q R S T U V W Z",
      },
      C: {
        "1": "mB S T U V W Z a b c d e f g h i j X k H",
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R vB wB",
      },
      M: { "1": "X" },
      A: { "2": "J D E F tB", "33": "A B" },
      F: {
        "1": "dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB",
      },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      E: {
        "1": "G 6B 7B pB qB",
        "2": "8B",
        "33": "I l J D E F A B C K L 0B nB 1B 2B 3B 4B oB hB iB 5B",
      },
      G: {
        "1": "WC XC pB qB",
        "33": "E nB EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC",
      },
      P: { "1": "pC qC", "33": "I gC hC iC jC kC oB lC mC nC oC" },
      I: { "1": "H", "33": "jB I ZC aC bC cC sB dC eC" },
    },
    B: 6,
    C: "::file-selector-button CSS pseudo-element",
  };
});
var m = f(t()),
  p = f(t()),
  { A: S, B: D, C: H } = p,
  { default: E, ...F } = p,
  K = m.default ?? E ?? F;
export { D as B, H as C, K as default, S as A };
