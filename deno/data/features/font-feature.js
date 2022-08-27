/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/font-feature) es2022 production */
var s = Object.create;
var f = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !S.call(C, t) && t !== e && f(C, t, {
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
) => (e = C != null ? s(l(C)) : {},
  p(
    B || !C || !C.__esModule
      ? f(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = i((G, A) => {
  A.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B 2B",
        33: "0 1 2 G M N O o p q r s t u v w x y z",
        164: "I n J D E F A B C K L",
      },
      D: {
        1: "HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G",
        33: "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB DB EB FB GB",
        292: "M N O o p",
      },
      E: {
        1: "A B C K L G 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "D E F 4B sB 6B 7B",
        4: "I n J 5B",
      },
      F: {
        1: "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33: "0 1 2 3 G M N O o p q r s t u v w x y z",
      },
      G: {
        1: "PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "E MC NC OC",
        4: "sB JC yB KC LC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB", 33: "iC jC" },
      J: { 2: "D", 33: "A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "lC mC nC oC pC tB qC rC sC tC uC lB vC", 33: "I" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS font-feature-settings",
  };
});
var r = D(a()),
  { A: H, B: I, C: c } = r,
  { default: d, ...E } = r,
  m = d !== void 0 ? d : E;
export { c as C, H as A, I as B, m as default };
