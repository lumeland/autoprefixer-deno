/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/calc) es2022 production */
var s = Object.create;
var r = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, e, a) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of m(B)) {
      !S.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(a = c(B, t)) || a.enumerable,
      });
    }
  }
  return C;
};
var A = (
  C,
  B,
  e,
) => (e = C != null ? s(p(C)) : {},
  u(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var o = i((G, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E tB", "260": "F", "516": "A B" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "2": "uB jB vB wB",
        "33": "I l J D E F A B C K L G",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "2": "I l J D E F A B C K L G M N O",
        "33": "m n o p q r s",
      },
      E: {
        "1": "D E F A B C K L G 2B 3B 4B oB hB iB 5B 6B 7B pB qB 8B",
        "2": "I l 0B nB 1B",
        "33": "J",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 G M N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W",
        "2": "F B C 9B AC BC CC hB rB DC iB",
      },
      G: {
        "1": "E HC IC JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "2": "nB EC sB FC",
        "33": "GC",
      },
      H: { "2": "YC" },
      I: { "1": "H", "2": "jB I ZC aC bC cC sB", "132": "dC eC" },
      J: { "1": "A", "2": "D" },
      K: { "1": "Y", "2": "A B C hB rB iB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "A B" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "calc() as CSS unit value",
  };
});
var d = A(o()),
  l = A(o()),
  { A: H, B: I, C: n } = l,
  { default: D, ...E } = l,
  J = d.default ?? D ?? E;
export { H as A, I as B, J as default, n as C };
