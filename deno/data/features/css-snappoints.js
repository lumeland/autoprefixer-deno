/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-snappoints) es2022 production */
var S = Object.create;
var A = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !s.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = f(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? S(p(C)) : {},
  c(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = u((G, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F zB", 6308: "A", 6436: "B" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        6436: "C K L G M N O",
      },
      C: {
        1: "YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z 1B 2B",
        2052:
          "8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB",
      },
      D: {
        1: "ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB",
        8258: "WB XB YB",
      },
      E: {
        1: "B C K L G jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n J D E 4B sB 5B 6B 7B",
        3108: "F A 8B tB",
      },
      F: {
        1: "b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB EC FC GC HC jB xB IC kB",
        8258: "NB OB PB QB RB SB TB UB",
      },
      G: {
        1: "SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "E sB JC yB KC LC MC NC",
        3108: "OC PC QC RC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 2: "kC" },
      P: { 1: "tB qC rC sC tC uC lB vC", 2: "I lC mC nC oC pC" },
      Q: { 2: "wC" },
      R: { 2: "xC" },
      S: { 2052: "yC" },
    },
    B: 4,
    C: "CSS Scroll Snap",
  };
});
var r = D(d()),
  { A: H, B: I, C: i } = r,
  { default: l, ...E } = r,
  m = l !== void 0 ? l : E;
export { H as A, I as B, i as C, m as default };
