/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/border-radius) es2022 production */
var m = Object.create;
var t = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var S = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var l = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, r, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of S(B)) {
      !i.call(C, e) && e !== r && t(C, e, {
        get: () => B[e],
        enumerable: !(d = p(B, e)) || d.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  r,
) => (r = C != null ? m(c(C)) : {},
  n(
    B || !C || !C.__esModule
      ? t(r, "default", { value: C, enumerable: !0 })
      : r,
    C,
  ));
var o = l((F, f) => {
  f.exports = {
    A: {
      A: { "1": "F A B", "2": "J D E tB" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "257":
          "0 1 2 3 4 5 6 7 8 9 I l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB",
        "289": "jB vB wB",
        "292": "uB",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 l J D E F A B C K L G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33": "I",
      },
      E: {
        "1": "l D E F A B C K L G 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
        "33": "I 0B nB",
        "129": "J 1B 2B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 B C G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W BC CC hB rB DC iB",
        "2": "F 9B AC",
      },
      G: {
        "1":
          "E EC sB FC GC HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "nB",
      },
      H: { "2": "YC" },
      I: { "1": "jB I H aC bC cC sB dC eC", "33": "ZC" },
      J: { "1": "D A" },
      K: { "1": "B C Y hB rB iB", "2": "A" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "257": "tC" },
    },
    B: 4,
    C: "CSS3 Border-radius (rounded corners)",
  };
});
var s = A(o()),
  a = A(o()),
  { A: G, B: H, C: I } = a,
  { default: u, ...D } = a,
  J = s.default ?? u ?? D;
export { G as A, H as B, I as C, J as default };
