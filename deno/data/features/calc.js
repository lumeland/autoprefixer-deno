/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/calc) es2022 production */
var f = Object.create;
var o = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, a) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !n.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(a = r(B, t)) || a.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? f(c(C)) : {},
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E zB", 260: "F", 516: "A B" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B 2B",
        33: "I n J D E F A B C K L G",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G M N O",
        33: "o p q r s t u",
      },
      E: {
        1: "D E F A B C K L G 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n 4B sB 5B",
        33: "J",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
      },
      G: {
        1: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC",
        33: "LC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB", 132: "iC jC" },
      J: { 1: "A", 2: "D" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "calc() as CSS unit value",
  };
});
var u = p(d()),
  { A: G, B: H, C: I } = u,
  { default: l, ...D } = u,
  m = l !== void 0 ? l : D;
export { G as A, H as B, I as C, m as default };
