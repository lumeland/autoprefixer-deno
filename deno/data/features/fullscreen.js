/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/fullscreen) es2022 production */
var f = Object.create;
var o = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, F = Object.prototype.hasOwnProperty;
var I = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, A) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !F.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(A = u(B, t)) || A.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? f(s(C)) : {},
  c(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var l = I((G, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A zB", 548: "B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        516: "C K L G M N O",
      },
      C: {
        1: "b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n J D E F 1B 2B",
        676:
          "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB",
        1700: "GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB",
      },
      D: {
        1: "bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L",
        676: "G M N O o",
        804:
          "0 1 2 3 4 5 6 7 8 9 p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB",
      },
      E: {
        2: "I n 4B sB",
        548: "vB wB CC lB DC",
        676: "5B",
        804: "J D E F A B C K L G 6B 7B 8B tB jB kB 9B AC BC uB",
      },
      F: {
        1: "b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z kB",
        2: "F B C EC FC GC HC jB xB IC",
        804:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB",
      },
      G: {
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC",
        2052: "UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 2: "mB I H eC fC gC hC yB iC jC" },
      J: { 2: "D", 292: "A" },
      K: { 2: "A B C b jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A", 548: "B" },
      O: { 804: "kC" },
      P: { 1: "tB qC rC sC tC uC lB vC", 804: "I lC mC nC oC pC" },
      Q: { 804: "wC" },
      R: { 804: "xC" },
      S: { 1: "yC" },
    },
    B: 1,
    C: "Full Screen API",
  };
});
var a = p(l()),
  { A: H, B: P, C: S } = a,
  { default: r, ...D } = a,
  i = r !== void 0 ? r : D;
export { H as A, i as default, P as B, S as C };
