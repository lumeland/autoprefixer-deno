/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/text-decoration) es2022 production */
var i = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, t, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of m(B)) {
      !c.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(r = l(B, e)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  t,
) => (t = C != null ? i(p(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var o = n((H, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: {
        "2": "C K L G M N O",
        "2052": "P Q R S T U V W Z a b c d e f g h i j X k H",
      },
      C: {
        "2": "uB jB I l vB wB",
        "1028":
          "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "1060": "0 1 2 J D E F A B C K L G M N O m n o p q r s t u v w x y z",
      },
      D: {
        "2": "I l J D E F A B C K L G M N O m n o p q r s",
        "226":
          "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
        "2052":
          "OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
      },
      E: {
        "2": "I l J D 0B nB 1B 2B",
        "772": "K L G iB 5B 6B 7B pB qB 8B",
        "804": "E F A B C 4B oB hB",
        "1316": "3B",
      },
      F: {
        "2":
          "0 1 F B C G M N O m n o p q r s t u v w x y z 9B AC BC CC hB rB DC iB",
        "226": "2 3 4 5 6 7 8 9 AB",
        "2052":
          "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
      },
      G: {
        "2": "nB EC sB FC GC HC",
        "292": "E IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB dC eC" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "2052": "H" },
      M: { "1": "X" },
      N: { "2": "A B" },
      O: { "2052": "fC" },
      P: { "2": "I gC hC", "2052": "iC jC kC oB lC mC nC oC pC qC" },
      Q: { "2": "rC" },
      R: { "1": "sC" },
      S: { "1028": "tC" },
    },
    B: 4,
    C: "text-decoration styling",
  };
});
var a = d(o()),
  s = d(o()),
  { A: I, B: J, C: K } = s,
  { default: E, ...F } = s,
  L = a.default ?? E ?? F;
export { I as A, J as B, K as C, L as default };
