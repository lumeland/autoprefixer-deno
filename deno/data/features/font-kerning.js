/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/font-kerning) es2022 production */
var a = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
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
) => (e = C != null ? a(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var f = i((G, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L G M N O",
      },
      C: {
        1: "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n J D E F A B C K L G M N O o p q r s 1B 2B",
        194: "0 1 2 t u v w x y z",
      },
      D: {
        1: "2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G M N O o p q r s t u v w x",
        33: "0 1 y z",
      },
      E: {
        1: "A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n J 4B sB 5B 6B",
        33: "D E F 7B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C G EC FC GC HC jB xB IC kB",
        33: "M N O o",
      },
      G: {
        1: "UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC LC MC",
        33: "E NC OC PC QC RC SC TC",
      },
      H: { 2: "dC" },
      I: { 1: "H jC", 2: "mB I eC fC gC hC yB", 33: "iC" },
      J: { 2: "D", 33: "A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS3 font-kerning",
  };
});
var r = D(f()),
  { A: H, B: I, C: c } = r,
  { default: n, ...E } = r,
  m = n !== void 0 ? n : E;
export { c as C, H as A, I as B, m as default };
