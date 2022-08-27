/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-crisp-edges) es2022 production */
var f = Object.create;
var a = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !u.call(C, t) && t !== e && a(C, t, {
        get: () => B[t],
        enumerable: !(d = i(B, t)) || d.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? f(p(C)) : {},
  n(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var s = m((F, o) => {
  o.exports = {
    A: {
      A: { 2: "J zB", 2340: "D E F A B" },
      B: {
        2: "C K L G M N O",
        1025: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        1: "e f g h i j k l a m H qB rB",
        2: "0B mB 1B",
        513:
          "VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d",
        545:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b 2B",
      },
      D: {
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z",
        1025:
          "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "A B C K L G tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n 4B sB 5B",
        164: "J",
        4644: "D E F 6B 7B 8B",
      },
      F: {
        2: "F B G M N O o p q r s t u v w EC FC GC HC jB xB",
        545: "C IC kB",
        1025:
          "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB",
        4260: "KC LC",
        4644: "E MC NC OC PC",
      },
      H: { 2: "dC" },
      I: { 2: "mB I eC fC gC hC yB iC jC", 1025: "H" },
      J: { 2: "D", 4260: "A" },
      K: { 2: "A B jB xB", 545: "C kB", 1025: "b" },
      L: { 1025: "H" },
      M: { 545: "a" },
      N: { 2340: "A B" },
      O: { 1: "kC" },
      P: { 1025: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1025: "wC" },
      R: { 1025: "xC" },
      S: { 4097: "yC" },
    },
    B: 7,
    C: "Crisp edges/pixelated images",
  };
});
var r = x(s()),
  { A: G, B: H, C: I } = r,
  { default: A, ...D } = r,
  c = A !== void 0 ? A : D;
export { c as default, G as A, H as B, I as C };
