/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-cross-fade) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var F = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !l.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = n(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? f(F(C)) : {},
  c(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB 1B 2B",
      },
      D: {
        2: "I n J D E F A B C K L G M",
        33:
          "0 1 2 3 4 5 6 7 8 9 N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "A B C K L G tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n 4B sB",
        33: "J D E F 5B 6B 7B 8B",
      },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB",
        33: "E KC LC MC NC OC PC",
      },
      H: { 2: "dC" },
      I: { 2: "mB I eC fC gC hC yB", 33: "H iC jC" },
      J: { 2: "D A" },
      K: { 2: "A B C jB xB kB", 33: "b" },
      L: { 33: "H" },
      M: { 2: "a" },
      N: { 2: "A B" },
      O: { 33: "kC" },
      P: { 33: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 33: "wC" },
      R: { 33: "xC" },
      S: { 2: "yC" },
    },
    B: 4,
    C: "CSS Cross-Fade Function",
  };
});
var s = i(a()),
  { A: G, B: H, C: I } = s,
  { default: r, ...p } = s,
  m = r !== void 0 ? r : p;
export { G as A, H as B, I as C, m as default };
