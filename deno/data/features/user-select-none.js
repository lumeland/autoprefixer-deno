/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/user-select-none) es2022 production */
var f = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? f(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var r = c((G, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F zB", 33: "A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        33: "C K L G M N O",
      },
      C: {
        1: "ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        33:
          "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB 1B 2B",
      },
      D: {
        1: "NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB",
      },
      E: {
        1: "DC",
        33:
          "I n J D E F A B C K L G 4B sB 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB",
      },
      F: {
        1: "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z",
      },
      G: {
        33:
          "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 33: "mB I eC fC gC hC yB iC jC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 33: "A B" },
      O: { 2: "kC" },
      P: { 1: "mC nC oC pC tB qC rC sC tC uC lB vC", 33: "I lC" },
      Q: { 1: "wC" },
      R: { 2: "xC" },
      S: { 33: "yC" },
    },
    B: 5,
    C: "CSS user-select: none",
  };
});
var a = D(r()),
  { A: H, B: I, C: i } = a,
  { default: s, ...E } = a,
  m = s !== void 0 ? s : E;
export { H as A, I as B, i as C, m as default };
