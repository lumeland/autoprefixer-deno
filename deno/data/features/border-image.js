/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/border-image) es2022 production */
var s = Object.create;
var d = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !i.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(S(C)) : {},
  n(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = m((F, r) => {
  r.exports = {
    A: {
      A: { 1: "B", 2: "J D E F A zB" },
      B: {
        1: "L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        129: "C K",
      },
      C: {
        1: "JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB",
        260:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
        804: "I n J D E F A B C K L 1B 2B",
      },
      D: {
        1: "PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        260: "KB LB MB NB OB",
        388: "0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB",
        1412: "G M N O o p q r s t u v w x y",
        1956: "I n J D E F A B C K L",
      },
      E: {
        1: "vB wB CC lB DC",
        129: "A B C K L G 8B tB jB kB 9B AC BC uB",
        1412: "J D E F 6B 7B",
        1956: "I n 4B sB 5B",
      },
      F: {
        1: "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F EC FC",
        260: "7 8 9 AB BB",
        388: "0 1 2 3 4 5 6 G M N O o p q r s t u v w x y z",
        1796: "GC HC",
        1828: "B C jB xB IC kB",
      },
      G: {
        1: "vB wB lB",
        129: "PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB",
        1412: "E LC MC NC OC",
        1956: "sB JC yB KC",
      },
      H: { 1828: "dC" },
      I: { 1: "H", 388: "iC jC", 1956: "mB I eC fC gC hC yB" },
      J: { 1412: "A", 1924: "D" },
      K: { 1: "b", 2: "A", 1828: "B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "B", 2: "A" },
      O: { 388: "kC" },
      P: { 1: "nC oC pC tB qC rC sC tC uC lB vC", 260: "lC mC", 388: "I" },
      Q: { 260: "wC" },
      R: { 260: "xC" },
      S: { 260: "yC" },
    },
    B: 4,
    C: "CSS3 Border images",
  };
});
var f = p(A()),
  { A: G, B: H, C: I } = f,
  { default: a, ...D } = f,
  c = a !== void 0 ? a : D;
export { c as default, G as A, H as B, I as C };
