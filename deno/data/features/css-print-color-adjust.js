/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-print-color-adjust) es2022 production */
var l = Object.create;
var p = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var E = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var F = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !i.call(C, t) && t !== o && p(C, t, {
        get: () => B[t],
        enumerable: !(r = m(B, t)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  o,
) => (o = C != null ? l(c(C)) : {},
  F(
    B || !C || !C.__esModule
      ? p(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = E((u, a) => {
  a.exports = {
    A: {
      D: {
        "2": "I l J D E F A B C K L G M",
        "33":
          "0 1 2 3 4 5 6 7 8 9 N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      L: { "33": "H" },
      B: {
        "2": "C K L G M N O",
        "33": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "1": "i j X k H",
        "2":
          "0 1 2 3 4 5 6 7 8 9 uB jB I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB vB wB",
        "33":
          "FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h",
      },
      M: { "1": "X" },
      A: { "2": "J D E F A B tB" },
      F: {
        "2": "F B C 9B AC BC CC hB rB DC iB",
        "33":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      K: { "2": "A B C hB rB iB", "33": "Y" },
      E: {
        "1": "qB",
        "2": "I l 0B nB 1B 8B",
        "33": "J D E F A B C K L G 2B 3B 4B oB hB iB 5B 6B 7B pB",
      },
      G: {
        "1": "qB",
        "2": "nB EC sB FC",
        "33": "E GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB",
      },
      P: { "33": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      I: { "2": "jB I ZC aC bC cC sB", "33": "H dC eC" },
    },
    B: 6,
    C: "print-color-adjust property",
  };
});
var f = d(e()),
  A = d(e()),
  { A: D, B: H, C: K } = A,
  { default: G, ...I } = A,
  L = f.default ?? G ?? I;
export { D as A, H as B, K as C, L as default };
