/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/transforms3d) es2022 production */
var s = Object.create;
var r = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !D.call(C, t) && t !== e && r(C, t, {
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
) => (e = C != null ? s(u(C)) : {},
  m(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((G, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F zB", 132: "A B" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n J D E F 1B 2B",
        33: "A B C K L G",
      },
      D: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B",
        33: "0 1 2 3 4 C K L G M N O o p q r s t u v w x y z",
      },
      E: {
        1: "vB wB CC lB DC",
        2: "4B sB",
        33: "I n J D E 5B 6B 7B",
        257: "F A B C K L G 8B tB jB kB 9B AC BC uB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33: "G M N O o p q r",
      },
      G: {
        1: "vB wB lB",
        33: "E sB JC yB KC LC MC NC",
        257: "OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "eC fC gC", 33: "mB I hC yB iC jC" },
      J: { 33: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 132: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 5,
    C: "CSS3 3D Transforms",
  };
});
var f = p(a()),
  { A: H, B: I, C: c } = f,
  { default: d, ...E } = f,
  i = d !== void 0 ? d : E;
export { c as C, H as A, I as B, i as default };
