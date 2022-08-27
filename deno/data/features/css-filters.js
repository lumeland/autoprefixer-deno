/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-filters) es2022 production */
var l = Object.create;
var o = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var E = Object.getPrototypeOf, F = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, f) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !F.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(f = s(B, t)) || f.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? l(E(C)) : {},
  c(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((D, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        1028: "K L G M N O",
        1346: "C",
      },
      C: {
        1: "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B",
        196: "3",
        516: "0 1 2 I n J D E F A B C K L G M N O o p q r s t u v w x y z 2B",
      },
      D: {
        1: "MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G M N",
        33:
          "0 1 2 3 4 5 6 7 8 9 O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB",
      },
      E: {
        1: "A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n 4B sB 5B",
        33: "J D E F 6B 7B",
      },
      F: {
        1: "9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33: "0 1 2 3 4 5 6 7 8 G M N O o p q r s t u v w x y z",
      },
      G: {
        1: "PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC",
        33: "E LC MC NC OC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB", 33: "iC jC" },
      J: { 2: "D", 33: "A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "nC oC pC tB qC rC sC tC uC lB vC", 33: "I lC mC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 5,
    C: "CSS Filter Effects",
  };
});
var a = i(d()),
  { A: G, B: H, C: I } = a,
  { default: r, ...n } = a,
  m = r !== void 0 ? r : n;
export { G as A, H as B, I as C, m as default };
