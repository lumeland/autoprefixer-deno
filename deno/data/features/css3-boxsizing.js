/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css3-boxsizing) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = i(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? s(n(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((F, d) => {
  d.exports = {
    A: {
      A: { 1: "E F A B", 8: "J D zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        33: "0B mB I n J D E F A B C K L G M N O o p q r s t u v w x 1B 2B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "I n J D E F",
      },
      E: {
        1: "J D E F A B C K L G 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        33: "I n 4B sB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z EC FC GC HC jB xB IC kB",
        2: "F",
      },
      G: {
        1: "E KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        33: "sB JC yB",
      },
      H: { 1: "dC" },
      I: { 1: "I H hC yB iC jC", 33: "mB eC fC gC" },
      J: { 1: "A", 33: "D" },
      K: { 1: "A B C b jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 5,
    C: "CSS3 Box-sizing",
  };
});
var r = x(a()),
  { A: G, B: H, C: I } = r,
  { default: f, ...D } = r,
  c = f !== void 0 ? f : D;
export { c as default, G as A, H as B, I as C };
