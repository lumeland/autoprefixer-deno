/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-transitions) es2022 production */
var f = Object.create;
var A = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? f(l(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((G, a) => {
  a.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B 2B",
        33: "n J D E F A B C K L G",
        164: "I",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "I n J D E F A B C K L G M N O o p q r s t u",
      },
      E: {
        1: "D E F A B C K L G 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        33: "J 5B",
        164: "I n 4B sB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z kB",
        2: "F EC FC",
        33: "C",
        164: "B GC HC jB xB IC",
      },
      G: {
        1: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        33: "LC",
        164: "sB JC yB KC",
      },
      H: { 2: "dC" },
      I: { 1: "H iC jC", 33: "mB I eC fC gC hC yB" },
      J: { 1: "A", 33: "D" },
      K: { 1: "b kB", 33: "C", 164: "A B jB xB" },
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
    C: "CSS3 Transitions",
  };
});
var s = D(d()),
  { A: H, B: I, C: c } = s,
  { default: r, ...E } = s,
  m = r !== void 0 ? r : E;
export { c as C, H as A, I as B, m as default };
