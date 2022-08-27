/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css3-tabsize) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !i.call(C, t) && t !== e && A(C, t, {
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
) => (e = C != null ? s(S(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = n((G, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L G M N O",
      },
      C: {
        1: "c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B 2B",
        33:
          "MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        164:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB",
      },
      D: {
        1: "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G M N O o p",
        132: "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB",
      },
      E: {
        1: "L G 9B AC BC uB vB wB CC lB DC",
        2: "I n J 4B sB 5B",
        132: "D E F A B C K 6B 7B 8B tB jB kB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F EC FC GC",
        132: "G M N O o p q r s t u v w x",
        164: "B C HC jB xB IC kB",
      },
      G: {
        1: "ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC LC",
        132: "E MC NC OC PC QC RC SC TC UC VC WC XC YC",
      },
      H: { 164: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB", 132: "iC jC" },
      J: { 132: "D A" },
      K: { 1: "b", 2: "A", 164: "B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 164: "yC" },
    },
    B: 4,
    C: "CSS3 tab-size",
  };
});
var r = D(d()),
  { A: H, B: I, C: b } = r,
  { default: f, ...E } = r,
  c = f !== void 0 ? f : E;
export { b as C, c as default, H as A, I as B };
