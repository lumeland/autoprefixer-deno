/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001335/data/features/flexbox) es2022 production */
var m = Object.create;
var A = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var F = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, e, r) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !S.call(C, o) && o !== e && A(C, o, {
        get: () => B[o],
        enumerable: !(r = p(B, o)) || r.enumerable,
      });
    }
  }
  return C;
};
var d = (
  C,
  B,
  e,
) => (e = C != null ? m(F(C)) : {},
  u(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var t = i((H, f) => {
  f.exports = {
    A: {
      A: { "2": "J D E F tB", "1028": "B", "1316": "A" },
      B: { "1": "C K L G M N O P Q R S T U V W Z a b c d e f g h i j X k H" },
      C: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W Z a b c d e f g h i j X k H",
        "164": "uB jB I l J D E F A B C K L G M N O m n o vB wB",
        "516": "p q r s t u",
      },
      D: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB kB QB lB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R S T U V W Z a b c d e f g h i j X k H xB yB zB",
        "33": "o p q r s t u v",
        "164": "I l J D E F A B C K L G M N O m n",
      },
      E: {
        "1": "F A B C K L G 4B oB hB iB 5B 6B 7B pB qB 8B",
        "33": "D E 2B 3B",
        "164": "I l J 0B nB 1B",
      },
      F: {
        "1":
          "0 1 2 3 4 5 6 7 8 9 N O m n o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB Y TB UB VB WB XB YB ZB aB bB cB dB eB fB gB P Q R mB S T U V W iB",
        "2": "F B C 9B AC BC CC hB rB DC",
        "33": "G M",
      },
      G: {
        "1": "JC KC LC MC NC OC PC QC RC SC TC UC VC WC XC pB qB",
        "33": "E HC IC",
        "164": "nB EC sB FC GC",
      },
      H: { "1": "YC" },
      I: { "1": "H dC eC", "164": "jB I ZC aC bC cC sB" },
      J: { "1": "A", "164": "D" },
      K: { "1": "Y iB", "2": "A B C hB rB" },
      L: { "1": "H" },
      M: { "1": "X" },
      N: { "1": "B", "292": "A" },
      O: { "1": "fC" },
      P: { "1": "I gC hC iC jC kC oB lC mC nC oC pC qC" },
      Q: { "1": "rC" },
      R: { "1": "sC" },
      S: { "1": "tC" },
    },
    B: 4,
    C: "CSS Flexible Box Layout Module",
  };
});
var l = d(t()),
  a = d(t()),
  { A: I, B: L, C: M } = a,
  { default: D, ...E } = a,
  c = l.default ?? D ?? E;
export { c as default, I as A, L as B, M as C };
