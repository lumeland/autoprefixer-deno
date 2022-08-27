/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/border-radius) es2022 production */
var u = Object.create;
var o = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let r of n(B)) {
      !S.call(C, r) && r !== e && o(C, r, {
        get: () => B[r],
        enumerable: !(d = f(B, r)) || d.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? u(l(C)) : {},
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = c((F, t) => {
  t.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        257:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
        289: "mB 1B 2B",
        292: "0B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "I",
      },
      E: {
        1: "n D E F A B C K L G 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        33: "I 4B sB",
        129: "J 5B 6B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z GC HC jB xB IC kB",
        2: "F EC FC",
      },
      G: {
        1: "E JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        33: "sB",
      },
      H: { 2: "dC" },
      I: { 1: "mB I H fC gC hC yB iC jC", 33: "eC" },
      J: { 1: "D A" },
      K: { 1: "B C b jB xB kB", 2: "A" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 257: "yC" },
    },
    B: 4,
    C: "CSS3 Border-radius (rounded corners)",
  };
});
var s = p(A()),
  { A: G, B: H, C: I } = s,
  { default: a, ...D } = s,
  m = a !== void 0 ? a : D;
export { G as A, H as B, I as C, m as default };
