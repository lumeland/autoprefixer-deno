/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-boxdecorationbreak) es2022 production */
var l = Object.create;
var a = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var b = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of s(B)) {
      !S.call(C, o) && o !== e && a(C, o, {
        get: () => B[o],
        enumerable: !(t = n(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? l(u(C)) : {},
  c(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var r = b((D, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        2: "C K L G M N O",
        164: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        1: "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z 1B 2B",
      },
      D: {
        2: "I n J D E F A B C K L G M N O o p q",
        164:
          "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        2: "I n J 4B sB 5B",
        164: "D E F A B C K L G 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
      },
      F: {
        2: "F EC FC GC HC",
        129: "B C jB xB IC kB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        2: "sB JC yB KC LC",
        164: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 132: "dC" },
      I: { 2: "mB I eC fC gC hC yB", 164: "H iC jC" },
      J: { 2: "D", 164: "A" },
      K: { 2: "A", 129: "B C jB xB kB", 164: "b" },
      L: { 164: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 164: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 164: "wC" },
      R: { 164: "xC" },
      S: { 1: "yC" },
    },
    B: 5,
    C: "CSS box-decoration-break",
  };
});
var f = i(r()),
  { A: E, B: F, C: G } = f,
  { default: A, ...p } = f,
  H = A !== void 0 ? A : p;
export { E as A, F as B, G as C, H as default };
