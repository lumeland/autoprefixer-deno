/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css3-cursors-newer) es2022 production */
var a = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, o, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of S(B)) {
      !l.call(C, t) && t !== o && A(C, t, {
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
  o,
) => (o = C != null ? a(i(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var e = u((H, m) => {
  m.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "33": "uB jB I l J D E F A B C K L G M N O m n o p q vB wB",
      },
      D: {
        "1":
          "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33":
          "0 1 2 3 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "33": "I l J D E 0B nB 1B 2B 3B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 C r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W DC iB",
        "2": "F B 9B AC BC CC hB rB",
        "33": "G M N O m n o p q",
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
      Q: { "2": "rC" },
      R: { "2": "sC" },
      S: { "2": "tC" },
    },
    B: 4,
    C: "CSS3 Cursors: zoom-in & zoom-out",
  };
});
var s = f(e()),
  d = f(e()),
  { A: I, B: c, C: n } = d,
  { default: E, ...F } = d,
  J = s.default ?? E ?? F;
export { c as B, I as A, J as default, n as C };
