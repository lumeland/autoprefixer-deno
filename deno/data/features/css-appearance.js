/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-appearance) es2022 production */
var p = Object.create;
var a = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, A) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !u.call(C, t) && t !== e && a(C, t, {
        get: () => B[t],
        enumerable: !(A = l(B, t)) || A.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? p(s(C)) : {},
  c(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((G, o) => {
  o.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "T U V W X Y Z c d e f g h i j k l a m H",
        33: "S",
        164: "P Q R",
        388: "C K L G M N O",
      },
      C: {
        1: "Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        164:
          "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P",
        676:
          "0 1 2 3 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z 1B 2B",
      },
      D: {
        1: "T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "S",
        164:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R",
      },
      E: {
        1: "vB wB CC lB DC",
        164: "I n J D E F A B C K L G 4B sB 5B 6B 7B 8B tB jB kB 9B AC BC uB",
      },
      F: {
        1: "dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33: "aB bB cB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB",
      },
      G: {
        1: "vB wB lB",
        164:
          "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 164: "mB I eC fC gC hC yB iC jC" },
      J: { 164: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A", 388: "B" },
      O: { 164: "kC" },
      P: { 164: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 164: "wC" },
      R: { 164: "xC" },
      S: { 164: "yC" },
    },
    B: 5,
    C: "CSS Appearance",
  };
});
var f = D(d()),
  { A: H, B: I, C: i } = f,
  { default: r, ...E } = f,
  m = r !== void 0 ? r : E;
export { H as A, I as B, i as C, m as default };
