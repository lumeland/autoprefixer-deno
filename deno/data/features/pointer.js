/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/pointer) es2022 production */
var n = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !i.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var E = (
  C,
  B,
  e,
) => (e = C != null ? n(u(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var r = p((H, d) => {
  d.exports = {
    A: {
      A: { 1: "B", 2: "J D E F zB", 164: "A" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n 1B 2B",
        8: "0 1 2 3 4 5 6 7 8 9 J D E F A B C K L G M N O o p q r s t u v w x y z",
        328: "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB",
      },
      D: {
        1: "OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "I n J D E F A B C K L G M N O o p q",
        8: "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
        584: "LB MB NB",
      },
      E: {
        1: "K L G 9B AC BC uB vB wB CC lB DC",
        2: "I n J 4B sB 5B",
        8: "D E F A B C 6B 7B 8B tB jB",
        1096: "kB",
      },
      F: {
        1: "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        8: "0 1 2 3 4 5 6 7 G M N O o p q r s t u v w x y z",
        584: "8 9 AB",
      },
      G: {
        1: "XC YC ZC aC bC cC uB vB wB lB",
        8: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC",
        6148: "WC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 8: "mB I eC fC gC hC yB iC jC" },
      J: { 8: "D A" },
      K: { 1: "b", 2: "A", 8: "B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "B", 36: "A" },
      O: { 8: "kC" },
      P: { 1: "mC nC oC pC tB qC rC sC tC uC lB vC", 2: "lC", 8: "I" },
      Q: { 1: "wC" },
      R: { 2: "xC" },
      S: { 328: "yC" },
    },
    B: 2,
    C: "Pointer events",
  };
});
var f = E(r()),
  { A: I, B: P, C: c } = f,
  { default: a, ...F } = f,
  m = a !== void 0 ? a : F;
export { c as C, I as A, m as default, P as B };
