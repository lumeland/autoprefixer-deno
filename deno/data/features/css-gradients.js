/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-gradients) es2022 production */
var s = Object.create;
var o = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !G.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(d = l(B, t)) || d.enumerable,
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
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((F, A) => {
  A.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B",
        260: "0 1 2 3 4 M N O o p q r s t u v w x y z",
        292: "I n J D E F A B C K L G 2B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "A B C K L G M N O o p q r s t u",
        548: "I n J D E F",
      },
      E: {
        1: "vB wB CC lB DC",
        2: "4B sB",
        260: "D E F A B C K L G 6B 7B 8B tB jB kB 9B AC BC uB",
        292: "J 5B",
        804: "I n",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z kB",
        2: "F B EC FC GC HC",
        33: "C IC",
        164: "jB xB",
      },
      G: {
        1: "vB wB lB",
        260: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB",
        292: "KC LC",
        804: "sB JC yB",
      },
      H: { 2: "dC" },
      I: { 1: "H iC jC", 33: "I hC yB", 548: "mB eC fC gC" },
      J: { 1: "A", 548: "D" },
      K: { 1: "b kB", 2: "A B", 33: "C", 164: "jB xB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS Gradients",
  };
});
var f = p(a()),
  { A: H, B: I, C: c } = f,
  { default: r, ...D } = f,
  m = r !== void 0 ? r : D;
export { c as C, H as A, I as B, m as default };
