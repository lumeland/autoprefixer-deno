/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-read-only-write) es2022 production */
var s = Object.create;
var o = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !S.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(d = f(B, t)) || d.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(u(C)) : {},
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = c((F, r) => {
  r.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C",
      },
      C: {
        1: "iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        16: "0B",
        33:
          "0 1 2 3 4 5 6 7 8 9 mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB 1B 2B",
      },
      D: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        16: "I n J D E F A B C K L",
        132: "0 1 2 3 4 G M N O o p q r s t u v w x y z",
      },
      E: {
        1: "F A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        16: "4B sB",
        132: "I n J D E 5B 6B 7B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        16: "F B EC FC GC HC jB",
        132: "C G M N O o p q r xB IC kB",
      },
      G: {
        1: "OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        16: "sB JC",
        132: "E yB KC LC MC NC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 16: "eC fC", 132: "mB I gC hC yB iC jC" },
      J: { 1: "A", 132: "D" },
      K: { 1: "b", 2: "A B jB", 132: "C xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 33: "yC" },
    },
    B: 1,
    C: "CSS :read-only and :read-write selectors",
  };
});
var l = p(a()),
  { A: G, B: H, C: I } = l,
  { default: A, ...D } = l,
  m = A !== void 0 ? A : D;
export { G as A, H as B, I as C, m as default };
