/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-writing-mode) es2022 production */
var p = Object.create;
var r = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !s.call(C, t) && t !== e && r(C, t, {
        get: () => B[t],
        enumerable: !(o = i(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? p(n(C)) : {},
  S(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = u((F, d) => {
  d.exports = {
    A: {
      A: { 132: "J D E F A B zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z 1B 2B",
        322: "5 6 7 8 9",
      },
      D: {
        1: "HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J",
        16: "D",
        33:
          "0 1 2 3 4 5 6 7 8 9 E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB",
      },
      E: {
        1: "B C K L G jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I 4B sB",
        16: "n",
        33: "J D E F A 5B 6B 7B 8B tB",
      },
      F: {
        1: "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33: "0 1 2 3 G M N O o p q r s t u v w x y z",
      },
      G: {
        1: "SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        16: "sB JC yB",
        33: "E KC LC MC NC OC PC QC RC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "eC fC gC", 33: "mB I hC yB iC jC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 36: "A B" },
      O: { 1: "kC" },
      P: { 1: "lC mC nC oC pC tB qC rC sC tC uC lB vC", 33: "I" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS writing-mode property",
  };
});
var f = m(A()),
  { A: G, B: H, C: I } = f,
  { default: a, ...D } = f,
  c = a !== void 0 ? a : D;
export { c as default, G as A, H as B, I as C };
