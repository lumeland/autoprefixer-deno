/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-placeholder-shown) es2022 production */
var r = Object.create;
var d = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of p(B)) {
      !c.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = f(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? r(u(C)) : {},
  S(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = n((G, s) => {
  s.exports = {
    A: {
      A: { 2: "J D E F zB", 292: "A B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L G M N O",
      },
      C: {
        1: "KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B 2B",
        164:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB",
      },
      D: {
        1: "GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB",
      },
      E: {
        1: "F A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n J D E 4B sB 5B 6B 7B",
      },
      F: {
        1: "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "0 1 2 F B C G M N O o p q r s t u v w x y z EC FC GC HC jB xB IC kB",
      },
      G: {
        1: "OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "E sB JC yB KC LC MC NC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "lC mC nC oC pC tB qC rC sC tC uC lB vC", 2: "I" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 164: "yC" },
    },
    B: 5,
    C: ":placeholder-shown CSS pseudo-class",
  };
});
var A = D(a()),
  { A: H, B: I, C: h } = A,
  { default: l, ...E } = A,
  i = l !== void 0 ? l : E;
export { H as A, h as C, I as B, i as default };
