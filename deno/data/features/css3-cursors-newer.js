/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css3-cursors-newer) es2022 production */
var a = Object.create;
var r = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, o, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of l(B)) {
      !n.call(C, e) && e !== o && r(C, e, {
        get: () => B[e],
        enumerable: !(t = f(B, e)) || t.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  o,
) => (o = C != null ? a(m(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(o, "default", { value: C, enumerable: !0 })
      : o,
    C,
  ));
var d = S((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        33: "0B mB I n J D E F A B C K L G M N O o p q r s 1B 2B",
      },
      D: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "0 1 2 3 4 5 I n J D E F A B C K L G M N O o p q r s t u v w x y z",
      },
      E: {
        1: "F A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        33: "I n J D E 4B sB 5B 6B 7B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 C t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z IC kB",
        2: "F B EC FC GC HC jB xB",
        33: "G M N O o p q r s",
      },
      G: {
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 2: "a" },
      N: { 2: "A B" },
      O: { 2: "kC" },
      P: { 2: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 2: "wC" },
      R: { 2: "xC" },
      S: { 2: "yC" },
    },
    B: 4,
    C: "CSS3 Cursors: zoom-in & zoom-out",
  };
});
var u = p(d()),
  { A: G, B: H, C: I } = u,
  { default: s, ...D } = u,
  c = s !== void 0 ? s : D;
export { c as default, G as A, H as B, I as C };
