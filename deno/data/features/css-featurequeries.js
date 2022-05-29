/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/css-featurequeries) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of F(B)) {
      !i.call(C, t) && t !== e && A(C, t, {
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
) => (e = C != null ? m(S(C)) : {},
  u(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var o = l((H, a) => {
  a.exports = {
    A: {
      A: { "2": "J D E F A B tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB I l J D E F A B C K L G M N O m n o vB wB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N O m n o p q r s t u",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l J D E 0B nB 1B 2B 3B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W iB",
        "2": "F B C 9B AC BC CC hB rB DC",
      },
      G: {
        "1": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "E nB EC sB FC GC HC IC",
      },
      H: { "1": "YC" },
      I: { "1": "H dC eC", "2": "jB I ZC aC bC cC sB" },
      J: { "2": "D A" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
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
    C: "CSS Feature Queries",
  };
});
var d = f(o()),
  s = f(o()),
  { A: I, B: Q, C: c } = s,
  { default: D, ...E } = s,
  J = d.default ?? D ?? E;
export { c as C, I as A, J as default, Q as B };
